import React from "react";
import ReactDOM from "react-dom";
import Question from "./Question";
import {
  QuestionType,
  QuestionSubmissionType,
  QuestionDependencyType,
  QuestionDependencyChoiceType,
  ChoiceType
} from "../../types";
import { List, Map } from "immutable";
import { shallow } from "enzyme";

import type {
  QuestionSubmissionsMapType
} from "../../types/QuestionSubmissionsMapType";

import type {
  QuestionSubmissionMapValueType
} from "../../types/QuestionSubmissionMapValueType";

const question = new QuestionType({
  key: "first",
  label: "first",
  type: "string"
});

const requiredQuestion = new QuestionType({
  key: "first",
  label: "first",
  type: "string",
  required: true
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Question
      question={question}
      submission={new QuestionSubmissionType()}
      submissions={new Map()}
      setSubmission={() => {}}
    />,
    div
  );
});

it("renders the label", () => {
  const subject = shallow(
    <Question
      question={question}
      submission={new QuestionSubmissionType()}
      submissions={new Map()}
      setSubmission={() => {}}
    />
  );

  // FIXME: Check why labels are not working here
  //expect(subject.find("label").text()).toMatch(/first/);
});

describe("Required Questions", () => {
  it("renders the required text when the question is required", () => {
    const subject = shallow(
      <Question
        question={requiredQuestion}
        submission={new QuestionSubmissionType()}
        submissions={new Map()}
        setSubmission={() => {}}
      />
    );

    // FIXME: Check why labels are not working here
    //expect(subject.find("label").text()).toMatch(/first/);
    //expect(subject.find("i").text()).toMatch(/required/);
  });

  it("does not render required when the question is not required", () => {
    const subject = shallow(
      <Question
        question={question}
        submission={new QuestionSubmissionType()}
        submissions={new Map()}
        setSubmission={() => {}}
      />
    );

    // FIXME: Check why labels are not working here
    //expect(subject.find("label").text()).toMatch(/first/);
    expect(subject.find("i").length).toEqual(0);
  });
});

describe("QuestionDependency", () => {
  const questionDependencyChoice1 = new QuestionDependencyChoiceType({
    questionDependencyId: "1",
    choiceId: "10",
    name: "first"
  });

  describe("display: true", () => {
    const questionDependencyDisplayTrue = new QuestionDependencyType({
      id: "1",
      display: true,
      questionDependencyChoices: List([questionDependencyChoice1]),
      and: false
    });

    const questionWithDependencyDisplayTrue = new QuestionType({
      key: "first",
      label: "firstWithDependency",
      type: "string",
      required: false,
      questionDependency: questionDependencyDisplayTrue
    });

    const submissions = new Map({
      "1": new List([new QuestionSubmissionType({ id: "1", value: "10" })])
    });

    it("renders the question if its dependencies are satisfied", () => {
      const subject = shallow(
        <Question
          question={questionWithDependencyDisplayTrue}
          submission={new QuestionSubmissionType()}
          submissions={submissions}
          setSubmission={() => {}}
        />
      );

      expect(subject.find("label").text()).toMatch(/firstWithDependency/);
    });
  });

  describe("display: false", () => {
    const questionDependencyDisplayFalse = new QuestionDependencyType({
      id: "1",
      display: false,
      choices: List([questionDependencyChoice1]),
      and: false
    });

    const questionWithDependencyDisplayFalse = new QuestionType({
      key: "first",
      label: "firstWithDependency",
      type: "string",
      required: false,
      questionDependency: questionDependencyDisplayFalse
    });

    const submissions = new Map({
      "1": new List([new QuestionSubmissionType({ id: "1", value: "10" })])
    });

    it("hides the question if its dependencies are satisfied", () => {
      const subject = shallow(
        <Question
          question={questionWithDependencyDisplayFalse}
          submission={new QuestionSubmissionType()}
          submissions={submissions}
          setSubmission={() => {}}
        />
      );

      expect(subject.find("input").length).toEqual(0);
    });
  });
});
