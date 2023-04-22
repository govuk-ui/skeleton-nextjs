import { ErrorSummary, ErrorSummaryMessage } from "govuk-ui";

/**
 * Render error summary
 *
 * @param validation
 * @returns {JSX.Element}
 */
export const renderErrorSummary = (validation) => {
  return (
    <ErrorSummary>
      { Object.keys(validation).map((key) => (
        <ErrorSummaryMessage id={key} key={key}>{validation[key].summary}</ErrorSummaryMessage>
      ))}
    </ErrorSummary>
  );
}
