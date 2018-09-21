const { assert } = require('chai');
const { createApptMsg } = require('../routes/sms');

describe('sms', () => {
  describe('createApptMsg', () => {
    it('should return appointment message', () => {
      assert.equal(
        createApptMsg('Abushadi', 'J Ballin', '12/20/18', '10am'),
        'Hello J Ballin,\nThis is Dr. Abushadi\'s office reminding you about '
        + 'your appointment on 12/20/18 at 10am.',
      );
    });

    it('should return appointment message with a custom message', () => {
      assert.equal(
        createApptMsg('Abushadi', 'J Ballin', '12/20/18', '10am', 'Please bring your x-rays!'),
        'Hello J Ballin,\nThis is Dr. Abushadi\'s office reminding you about '
        + 'your appointment on 12/20/18 at 10am.\nNOTE: Please bring your x-rays!',
      );
    });
  });
});
