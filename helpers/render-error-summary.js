import { ErrorSummary, ErrorSummaryMessage } from "govuk-ui";

/**
 * Render error summary
 *
 * @param errors
 * @returns {JSX.Element}
 */
export const renderErrorSummary = (errors) => {
  return (
    <ErrorSummary>
      { Object.keys(errors).map((key) => (
        <ErrorSummaryMessage id={key} key={key}>{errors[key].summary}</ErrorSummaryMessage>
      ))}
    </ErrorSummary>
  );
}
