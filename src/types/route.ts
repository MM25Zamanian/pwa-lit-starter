interface Route {
  // show_in_nav?: boolean;
  path: string;
  name: string;
  label?: string;
  component: string;
  children?: Route[];
  action: () => Promise<void>;
}

export default Route;
