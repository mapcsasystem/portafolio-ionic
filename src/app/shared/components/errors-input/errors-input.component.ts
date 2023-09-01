import { Component, Input, OnInit, inject } from '@angular/core';
import { ValidatorsService } from '../../services/validators.service';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'shared-errors-input',
  templateUrl: './errors-input.component.html',
  styleUrls: ['./errors-input.component.scss'],
})
export class ErrorsInputComponent implements OnInit {
  ngOnInit(): void {}
}
