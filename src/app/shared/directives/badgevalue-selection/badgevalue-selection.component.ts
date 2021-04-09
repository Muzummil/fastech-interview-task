import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ConfigService } from "../../services/config.service";

export interface ISearchInputData {
  id: string;
  name: string;
  iconName: string;
}

@Component({
  selector: "badgevalue-selection",
  templateUrl: "./badgevalue-selection.component.html",
  styleUrls: ["./badgevalue-selection.component.css"]
})
export class BadgevalueSelectionComponent implements OnInit {
  public selectedItem: ISearchInputData | null = null;
  public selectedItems: any = [];

  @Input() customClasses: string = "";
  @Input() isSingleSelectionOnly: boolean = true;
  @Input() viewOnly: boolean = false;
  @Input() dataInputArray: ISearchInputData[] = [];
  @Output() dataResponseObject = new EventEmitter();

  constructor(public configService: ConfigService) { }

  ngOnInit(): void { }

  /**
   * @desc Select list item on click
   * @param item object
   * @return void
  */
  onItemSelect(item: ISearchInputData): void {
    this.selectedItem = this.dataInputArray.find((it) => it.id === item.id);
    console.log(this.selectedItem)
    if (this.selectedItem) {
      this.dataResponseObject.emit(this.selectedItem);
    }
  }

  /**
   * @desc Select list multiple item on click
   * @param item object
   * @return void
  */
  onItemMultiSelect(item: any): void {
    const checkValueExistence = itemId => this.selectedItems.some( ({id}) => id == itemId)
    if(checkValueExistence(item.id)){
      let index: number = this.selectedItems.findIndex(val => val.id === item.id);
      if (index != -1) {
        this.selectedItems.splice(index, 1);
      }
    }else{
      this.selectedItems.push(item);
    }
    console.log(this.selectedItems)
    if (this.selectedItems) {
      this.dataResponseObject.emit(this.selectedItems);
    }
  }

  public isValueSelected(itemId: string): boolean {
    const checkValueExistence = itemId => this.selectedItems.some( ({id}) => id == itemId)
    return checkValueExistence(itemId);
  }
}
