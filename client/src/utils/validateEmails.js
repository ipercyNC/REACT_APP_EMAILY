const re =/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default (emails) => {
  const invalidEmails = emails
    .replace(/(^\s*,)|(,\s*$)/g, '')
    .split(',')
    .map(email => email.trim())
    .filter(email => re.test(email) === false); //capture emails that fail this test
    if(invalidEmails.length) {
      return `These emails are invalid: ${invalidEmails}`;
    }
    return;
};
