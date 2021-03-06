// @flow

import React from "react";
import { List } from "immutable";
import { ChoiceType } from "../../../types";

type Props = {
  id: string,
  value: string,
  content: string,
  choices: List<ChoiceType>,
  onChange: Function,
  required: boolean
};

export default function Select(props: Props) {
  const { id, value, content, choices, onChange, required } = props;
  let newChoices = choices.unshift(
    new ChoiceType({ label: "Select", value: "" })
  );
  const options = newChoices.sortBy(c => c.order).map((choice, i) => {
    return (
      <option
        key={i}
        name={choice.get("label")}
        value={choice.get("id")}
        disabled={choice.get("disabled")}
        checked={value === choice.get("id")}
      >
        {choice.get("label")}
      </option>
    );
  });
  return (
    <div>
      <p>{content}</p>
      <select id={id} onChange={onChange} required={required}>{options}</select>
    </div>
  );
}
