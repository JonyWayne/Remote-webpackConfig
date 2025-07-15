export interface RemoteAppProps<T = string> {
  data?: T;
  onDataUpdate?: (newData: T) => void;
  title?: T;
}
