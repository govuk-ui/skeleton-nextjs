import { match } from './match';

const arraysAreEqual = (array1, array2) => {
  if (array1.length === array2.length) {
    return array1.every((element) => {
      return !!array2.includes(element);
    });
  }
  return false;
};

const arrayContains = (array, values) => {
  if (!array || !values) return false;
  if (!Array.isArray(array) || Array.isArray(values)) return false;
  return array.some((item) => values.includes(item));
};

export const conditionMatch = (routingConfig, data) => {
  console.log('Conditional match check ...');
  const matchValue = (condition, value) => condition.field && condition.value && value === condition.value;
  const matchGreaterThan = (condition, value) => condition.field && condition.value && value > condition.value;
  const matchLessThan = (condition, value) => condition.field && condition.value && value < condition.value;
  const matchAnyOne = (condition, value) => condition.field && condition.value && Array.isArray(condition.value) && Array.isArray(value) && value.some(e => condition.value.includes(e));
  const matchAll = (condition, value) => condition.field && condition.value && Array.isArray(condition.value) && Array.isArray(value) && arraysAreEqual(condition.value, value);
  const matchNone = (condition, value) => condition.field && condition.value && Array.isArray(condition.value) && Array.isArray(value) && !arrayContains(condition.value, value);
  for (const routingCondition of routingConfig) {
    const { page, condition } = routingCondition;
    if (!page) continue;
    if (!condition) {
      console.log(`Condition matched by default. Next page is '${page}'`);
      return page;
    }
    const value = data[`${condition.field}`];
    console.log(`Data stored for '${condition.field}' is '${value}'`);
    const matchFunctions = {
      [match.value]: matchValue,
      [match.greaterThan]: matchGreaterThan,
      [match.lessThan]: matchLessThan,
      [match.anyOne]: matchAnyOne,
      [match.all]: matchAll,
      [match.none]: matchNone,
    };
    const matchFunction = matchFunctions[condition.match];
    if (matchFunction && matchFunction(condition, value)) {
      console.log(`Condition matched! Next page is '${page}'`);
      return page;
    }
    console.log(`Condition not matched, next condition ...`);
  }
  return null;
};
