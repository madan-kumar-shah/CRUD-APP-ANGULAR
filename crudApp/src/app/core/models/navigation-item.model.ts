export interface NavigationItem {
    id: number;
    title: string;
    icon: string;
    route?: string;
    badge?: string;
    expanded?: boolean;
    children?: NavigationItem[];
    roles?: string[];
  }