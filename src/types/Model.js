// @flow

import { Record, Map } from "immutable";
import FormType from "./FormType";
import QuestionSubmissionType from "./QuestionSubmissionType";

export default class Model
  extends Record({
    form: new FormType(),
    submissions: new Map(),
    currentStep: 0
  }) {
  form: FormType;
  submissions: Map<string, QuestionSubmissionType>;
}
