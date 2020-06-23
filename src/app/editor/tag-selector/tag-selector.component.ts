import { Component, OnInit, forwardRef } from '@angular/core';
import { FormControl, FormArray, ControlValueAccessor, NG_VALUE_ACCESSOR, Validators, NG_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'app-tag-selector',
  templateUrl: './tag-selector.component.html',
  styleUrls: ['./tag-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TagSelectorComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => TagSelectorComponent),
      multi: true
    }
  ]
})
export class TagSelectorComponent implements OnInit, ControlValueAccessor, Validators {
  tag = new FormControl();
  tagList = new FormArray([]);
  onTouched;  // save call back function
  constructor() { }

  validate() {
    return null; // {errorState : value}
  }


  //Input
  writeValue(obj: string): void {
    this.tagList.clear();
    obj?.split(",").forEach(x => this.tagList.push(new FormControl(x)));
  }
  // Output
  registerOnChange(fn: any): void {
    this.tagList.valueChanges.subscribe({
      next: value => {
        fn(value.join(','));
        if (!!this.onTouched) {
          this.onTouched();
        }
      }
    });
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    // 當設定 disable/enable 時所對應的畫面操作
  }

  ngOnInit(): void {
  }
  addtag() {
    this.tagList.push(new FormControl(this.tag.value));
    this.tag.reset();

  }

  remove(idx) {
    this.tagList.removeAt(idx);
  }

}
