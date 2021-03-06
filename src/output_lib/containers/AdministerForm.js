// @flow

import { connect } from "react-redux";
import * as components from "../components";
import { AdministerFormActions } from "../actions";

export const AdministerForm = connect(
  function mapStateToProps(state) {
    return {
      model: state
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      addSection: (section, form_id) =>
        dispatch(AdministerFormActions.addSection(section, form_id)),
      setSectionName: (sectionId, name) =>
        dispatch(AdministerFormActions.setSectionName(sectionId, name)),
      setSectionContent: (sectionId, content) =>
        dispatch(AdministerFormActions.setSectionContent(sectionId, content)),
      addQuestion: sectionId =>
        dispatch(AdministerFormActions.addQuestion(sectionId)),
      setQuestionType: (sectionId, questionId, type) =>
        dispatch(
          AdministerFormActions.setQuestionType(sectionId, questionId, type)
        ),
      setQuestionKey: (sectionId, questionId, key) =>
        dispatch(
          AdministerFormActions.setQuestionKey(sectionId, questionId, key)
        ),
      saveForm: apiKey => dispatch(AdministerFormActions.saveForm(apiKey)),
      setQuestionRequired: (sectionId, questionId, required) =>
        dispatch(
          AdministerFormActions.setQuestionRequired(
            sectionId,
            questionId,
            required
          )
        ),
      setQuestionContent: (sectionId, questionId, content) =>
        dispatch(
          AdministerFormActions.setQuestionContent(
            sectionId,
            questionId,
            content
          )
        ),
      setQuestionPlaceholder: (sectionId, questionId, placeholder) =>
        dispatch(
          AdministerFormActions.setQuestionPlaceholder(
            sectionId,
            questionId,
            placeholder
          )
        ),
      setQuestionLabel: (sectionId, questionId, label) =>
        dispatch(
          AdministerFormActions.setQuestionLabel(sectionId, questionId, label)
        ),
      setQuestionValidateAs: (sectionId, questionId, validateAs) =>
        dispatch(
          AdministerFormActions.setQuestionValidateAs(
            sectionId,
            questionId,
            validateAs
          )
        ),
      deleteQuestion: (sectionId, questionId) =>
        dispatch(AdministerFormActions.deleteQuestion(sectionId, questionId)),
      toggleExpandQuestion: id =>
        dispatch(AdministerFormActions.toggleExpandQuestion(id)),
      moveQuestion: (sectionId, questionId, direction) =>
        dispatch(
          AdministerFormActions.moveQuestion(sectionId, questionId, direction)
        ),
      reorderSection: (sectionId, order) =>
        dispatch(AdministerFormActions.reorderSection(sectionId, order)),
      reorderQuestion: (sectionId, questionId, order) =>
        dispatch(
          AdministerFormActions.reorderQuestion(sectionId, questionId, order)
        ),
      reorderChoice: (sectionId, questionId, choiceId, order) =>
        dispatch(
          AdministerFormActions.reorderChoice(
            sectionId,
            questionId,
            choiceId,
            order
          )
        ),
      moveSection: (sectionId, direction) =>
        dispatch(AdministerFormActions.moveSection(sectionId, direction)),
      setFormCompletionContent: completionContent =>
        dispatch(
          AdministerFormActions.setFormCompletionContent(completionContent)
        ),
      addChoice: (sectionId, questionId) =>
        dispatch(AdministerFormActions.addChoice(sectionId, questionId)),
      moveChoice: (sectionId, questionId, choiceId, direction) =>
        dispatch(
          AdministerFormActions.moveChoice(
            sectionId,
            questionId,
            choiceId,
            direction
          )
        ),
      setChoiceLabel: (sectionId, questionId, choiceId, label) =>
        dispatch(
          AdministerFormActions.setChoiceLabel(
            sectionId,
            questionId,
            choiceId,
            label
          )
        ),
      deleteChoice: (sectionId, questionId, choiceId) =>
        dispatch(
          AdministerFormActions.deleteChoice(sectionId, questionId, choiceId)
        ),
      deleteSection: sectionId =>
        dispatch(AdministerFormActions.deleteSection(sectionId)),
      addQuestionDependency: (sectionId, questionId) =>
        dispatch(
          AdministerFormActions.addQuestionDependency(sectionId, questionId)
        ),
      deleteQuestionDependency: (sectionId, questionId, choiceId) =>
        dispatch(
          AdministerFormActions.deleteQuestionDependency(
            sectionId,
            questionId,
            choiceId
          )
        ),
      createQuestionDependency: (sectionId, questionId, choice) =>
        dispatch(
          AdministerFormActions.createQuestionDependency(
            sectionId,
            questionId,
            choice
          )
        ),
      setDisplayQuestionDependency: (sectionId, questionId, display) =>
        dispatch(
          AdministerFormActions.setDisplayQuestionDependency(
            sectionId,
            questionId,
            display
          )
        ),
      setAndQuestionDependency: (sectionId, questionId, and) =>
        dispatch(
          AdministerFormActions.setAndQuestionDependency(
            sectionId,
            questionId,
            and
          )
        ),
      toggleExpandSection: sectionId =>
        dispatch(AdministerFormActions.toggleExpandSection(sectionId)),
      addMetadataField: (sectionId, questionId) =>
        dispatch(AdministerFormActions.addMetadataField(sectionId, questionId)),
      deleteMetadataField: (sectionId, questionId, metadataIndex) =>
        dispatch(
          AdministerFormActions.deleteMetadataField(
            sectionId,
            questionId,
            metadataIndex
          )
        ),
      setMetadataFieldKey: (sectionId, questionId, index, value) =>
        dispatch(
          AdministerFormActions.setMetadataFieldKey(
            sectionId,
            questionId,
            index,
            value
          )
        ),
      setMetadataFieldValue: (sectionId, questionId, choiceId, key, value) =>
        dispatch(
          AdministerFormActions.setMetadataFieldValue(
            sectionId,
            questionId,
            choiceId,
            key,
            value
          )
        )
    };
  }
)(components.AdministerForm);
