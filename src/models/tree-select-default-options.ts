import { Injectable } from "@angular/core";
import { ExpandMode } from "./expand-mode";

@Injectable()
export class TreeSelectDefaultOptions {
  public allowFilter?: boolean;
  public filterPlaceholder?: string;
  public maxVisibleItemCount?: number;
  public allowParentSelection?: boolean;
  // IPPON START
  public includeDirectEntities?: boolean;
  public iterationThroughSelector?: number;
  // IPPON END
  public idField?: string;
  public textField?: string;
  public childrenField?: string;
  public filterCaseSensitive?: boolean;
  public expandMode = ExpandMode.None;
}
