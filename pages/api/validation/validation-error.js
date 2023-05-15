export const validationError = (errorMsg) => {
  if (typeof errorMsg === 'string') {
    return { inline: errorMsg, summary: errorMsg };
  } else if (typeof errorMsg === 'object') {
    if (errorMsg.inline && errorMsg.summary) {
      return errorMsg;
    } else if (errorMsg.inline || errorMsg.summary) {
      return { inline: errorMsg.inline || errorMsg.summary, summary: errorMsg.summary || errorMsg.inline };
    } else {
      throw new Error('Error object must have either an inline or summary key, or both.');
    }
  } else {
    throw new Error('Error must be a string or an object.');
  }
};
