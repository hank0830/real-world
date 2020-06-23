import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  // title = 'init title';
  // description;
  // body;

  tags = [];

  formData = new FormGroup({
    title: new FormControl(""),
    description: new FormControl(""),
    body: new FormControl({ value: '', disabled: true }),
    group: new FormGroup({
      field: new FormControl()
    }),
    tag: new FormControl(""),
    tagList: new FormControl('1,2')
  });

  constructor() { }

  ngOnInit(): void {

    this.formData.patchValue({
      title: "1",
      description: "2",
      tagList: "1,2"
    });

    this.formData.valueChanges.subscribe({
      next: value => {

        console.log(this.formData.getRawValue());
      }
    })
    // 取得formcontrol 方法
    // 1.this.formData.controls.title
    // 2.this.formData.get('title');

    // 多層
    // 1.this.formData.controls.group.controls.field;
    // 2.this.formData.get('group.field');

    this.formData.controls.title.valueChanges.subscribe({
      next: v => {
        if (!!v) {
          this.formData.controls.description.setValidators([Validators.required]);
        } else {
          this.formData.controls.description.clearValidators();
        }
        this.formData.controls.description.updateValueAndValidity({
          emitEvent: false   //不觸發上一層但可以影響本身
        });
        console.log(v)
      }
    })
  }


  // get tagList() {
  //   return this.formData.controls.tagList as FormArray;
  // }

  // addtag() {
  //   this.tagList.push(new FormControl(this.formData.value.tag));
  //   // this.tags.push(this.formData.controls.tag.value);

  //   this.formData.controls.tag.setValue('', {
  //     emitEvent: false
  //   });
  // }

  // remove(idx) {
  //   this.tagList.removeAt(idx);
  //   this.tagList.clear();
  // }


}
