import {
  Children,
  createContext,
  isValidElement,
  type AnchorHTMLAttributes,
  type MouseEventHandler,
  type ReactElement,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type NavigateOptions = {
  replace?: boolean;
};

type RouterContextValue = {
  location: string;
  navigate: (to: string, options?: NavigateOptions) => void;
};

const RouterContext = createContext<RouterContextValue | null>(null);

function getWindowLocation() {
  if (typeof window === "undefined") {
    return "/";
  }

  return window.location.pathname || "/";
}

export function BrowserRouter({ children }: { children: ReactNode }) {
  const [location, setLocation] = useState<string>(() => getWindowLocation());

  const updateLocation = useCallback(() => {
    setLocation(getWindowLocation());
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handlePopState = () => {
      updateLocation();
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [updateLocation]);

  const navigate = useCallback((to: string, options?: NavigateOptions) => {
    if (typeof window === "undefined") {
      setLocation(to);
      return;
    }

    const normalized = normalizePath(to.startsWith("/") ? to : `/${to}`);

    if (options?.replace) {
      window.history.replaceState({}, "", normalized);
    } else {
      window.history.pushState({}, "", normalized);
    }

    updateLocation();
  }, [updateLocation]);

  const value = useMemo<RouterContextValue>(() => ({
    location,
    navigate,
  }), [location, navigate]);

  return (
    <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
  );
}

function useRouterContext(): RouterContextValue {
  const context = useContext(RouterContext);

  if (!context) {
    throw new Error("Router components must be rendered within a <BrowserRouter />");
  }

  return context;
}

type RouteElement = ReactElement<RouteProps>;

function normalizePath(path: string) {
  if (path === "*") {
    return path;
  }

  return path.replace(/[#?].*$/, "").replace(/\/+$/, "") || "/";
}

function matchPath(path: string, location: string) {
  if (path === "*") {
    return true;
  }

  return normalizePath(path) === normalizePath(location);
}

export function Routes({ children }: { children: ReactNode }) {
  const { location } = useRouterContext();
  let element: ReactNode = null;

  Children.forEach(children, (child) => {
    if (element || !isValidElement<RouteProps>(child)) {
      return;
    }

    const routeElement: RouteElement = child;

    if (matchPath(routeElement.props.path, location)) {
      element = routeElement.props.element ?? routeElement.props.children ?? null;
    }
  });

  return <>{element}</>;
}

export type RouteProps = {
  path: string;
  element?: ReactNode;
  children?: ReactNode;
};

export function Route(_props: RouteProps) {
  return null;
}

export type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick"> & {
  to: string;
  replace?: boolean;
  children: ReactNode;
};

export function Link({
  to,
  replace,
  children,
  onClick,
  target,
  ...rest
}: LinkProps) {
  const { navigate } = useRouterContext();

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    if (onClick) {
      onClick(event);
    }

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      (target && target !== "_self") ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey
    ) {
      return;
    }

    event.preventDefault();
    navigate(to, { replace });
  };

  const normalized = normalizePath(to.startsWith("/") ? to : `/${to}`);

  return (
    <a href={normalized} target={target} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}

export function useNavigate() {
  return useRouterContext().navigate;
}

export function useLocation() {
  return useRouterContext().location;
}
