export default interface RouteConfig {
  path: string;
  component?: React.ComponentType;
  lazy?: React.ComponentType;
  to?: string;
  exact?: boolean;
  canEnter?: (() => boolean)[];
}
