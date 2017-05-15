export interface TaskList {
  kind: string;
  id: string;
  title: string;
  updated: string;
  selfLink: string;
}

export interface Task {
  etag: string;
  id: string;
  kind: string;
  position: string;
  selfLink: string;
  status: string;
  title: string;
  updated: string;
  parent: any;
  notes: string;
  links: any;
  due: any;
  deleted: any;
  completed: any;
}
