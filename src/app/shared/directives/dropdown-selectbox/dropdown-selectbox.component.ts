import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ConfigService } from "../../services/config.service";

export interface ISearchInputData {
  id: any;
  name: string;
}

@Component({
    selector: "dropdown-selectbox",
    templateUrl: "./dropdown-selectbox.component.html",
    styleUrls: ["./dropdown-selectbox.component.css"]
})
export class DropdonwSelectBoxComponent implements OnInit {
    public isDropDownOpen = false;
    public selectedItem: ISearchInputData | null = null;
    public searchedData: ISearchInputData[] = [];

    @Input() placeholder: string = "Select Value";
    @Input() customClasses: string = "";
    @Input() error: boolean = false;
    @Input() data: ISearchInputData[] = [];
    @Output() dataResponseObject = new EventEmitter();

    constructor(public configService: ConfigService) { }

    ngOnInit(): void {
        this.searchedData = this.data;
    }

    onFocus(): void {
        this.isDropDownOpen = true;
    }

    onBlur(): void {
        setTimeout(() => {
            this.isDropDownOpen = false;
        }, 100);
    }

    /**
     * @desc search and filter entered value
     * @param event
     * @return data array
     */
    searchData(event: KeyboardEvent): ISearchInputData[] {
        const value = (event.target as HTMLInputElement).value;
        this.isDropDownOpen = true;
        this.searchedData = [];

        this.data.map((item) => {
            if (item.name.toLowerCase().includes(value.toLowerCase())) {
                this.searchedData.push(item);
            }
        });

        return this.searchedData;
    }

    /**
     * @desc Select list item on click
     * @param item object
     * @return void
    */
    onItemSelect(item: ISearchInputData): void {
        this.selectedItem = this.data.find((it) => it.id === item.id);
        this.isDropDownOpen = false;
        console.log(this.selectedItem)
        if (this.selectedItem) {
            this.dataResponseObject.emit(this.selectedItem);
        }
    }
}
