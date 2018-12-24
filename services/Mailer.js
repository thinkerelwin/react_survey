const sendgrid = require('sendgrid')
const helper = sendgrid.mail
const keys = require('../config/keys')

class Mailer extends helper.Mail {
  constructor({ subject, recipients }, content) {
    super()

    this.from_email = new helper.Email('no-reply@emaily.com')
    this.subject = subject
    this.body = new helper.Conetent('text/html', content)
    this.recipients = this.formatAddresses(recipients)

    this.addContent(this.body) // came from built in function in helper.Mail
    this.addClickTracking()
    this.addRecipients()
  }

  formatAddresses(recipients) {
    return recipients.map(({ email}) => {
      return new helper.Email(email)
    })
  }
  addClickTracking() {
    const trackingSettings = new helper.TrackingSettings()
    const clickTracking = new helper.ClickTracking(true, true)

    trackingSettings.setClickTracking(clickTracking)
    this.addTrackingSettings(trackingSettings)
  }
}

module.exports = Mailer