export const VARIABLES = [
  "venue.name",
  "venue.phone",
  "venue.email",
  "venue.logo",
  "customer.first-name",
  "customer.last-name",
  "customer.phone",
  "customer.email",
  "event.date",
  "event.type",
  "payment.amount",
  "payment.due-date",
  "payment.link",
] as const;

export const DEFAULT_VARIABLES: Readonly<{
  [K in (typeof VARIABLES)[number]]: string;
}> = {
  "venue.name": "One Venue",
  "venue.phone": "+1 760 583 5578",
  "venue.email": "katherinewang2012@gmail.com",
  "venue.logo": "",
  "customer.first-name": "Stan",
  "customer.last-name": "Liu",
  "customer.phone": "+1 760 583 5578",
  "customer.email": "stanleyliu@berkeley.edu",
  "event.date": "Jan 1st, 2024",
  "event.type": "Wedding",
  "payment.amount": "$5000.00",
  "payment.due-date": "",
  "payment.link": "https://tryonevenue.com/payments/checkout",
};

export interface Email {
  name: string;
  subject: string;
  body: string;
}

export const EMAIL = {
  name: "Wedding Event - Deposit",
  subject: "The 1909 Wedding Deposit - {{customer.first-name}}",
  body: `
<img src="/favicon.svg" data-mailbox-component="logo" data-size="md" data-alignment="center">
<div data-mailbox-component="spacer" data-height="lg" class="spacer" contenteditable="false"></div>
<h2 style="text-align:center"><strong>The 1909</strong></h2>
<div>Hi {{customer.first-name}}!</div>
<div>
We are so excited for you to share your special day with us at {{venue.name}}.<br >
To guarantee your wedding date on the {{event.date}}, we kindly request a deposit.
</div>
<p>
<strong>Amount: </strong>{{payment.amount}}<br>
<strong>Due Date: </strong>{{payment.due-date}}<br>
<strong>Payment Methods: </strong>Credit Card, ACH
</p>
<div>Please use the following secure payment portal to place your deposit to reserve your event.</div>
<!--<div data-mailbox-component="spacer" data-height="lg" class="spacer" contenteditable="false"></div>-->
<a data-mailbox-component="button" mailboxcomponent="button" text="Pay Deposit →" url="{{payment.link}}" alignment="center" variant="filled" borderradius="round" buttoncolor="#141313" textcolor="#ffffff"></a>
<!--<div data-mailbox-component="spacer" data-height="lg" class="spacer" contenteditable="false"></div>-->
<!--<p>Join our vibrant community of users and developers on GitHub, where Maily is an <a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/arikchakma/maily.to"><em>open-source</em></a> project. Together, we'll shape the future of email editing.</p>-->
<p>If you have any questions or concerns, please contact us at <a href="mailto: {{venue.email}}">{{venue.email}}</a> or call us at <a href="tel:{{venue.phone}}">{{venue.phone}}</a></p>
<p>Regards,<br>{{company.name}}</p>`,
  //   body: `
  // <html>
  //     <head>
  //         <meta name="viewport" content="width=device-width, initial-scale=1">
  //         <style>
  //             html, body {
  //                 width: 100%;
  //                 height: 100%;
  //                 margin: 0;
  //                 padding: 0;
  //                 line-height: 1.5rem;
  //               }
  //         </style>
  //     </head>
  //     <body>
  //         <div style="background-color: rgb(236, 240, 243); padding: 2rem;">
  //             <div style="padding-top: 2.5rem; margin: auto; background-color: white; max-width: 400px;">
  //                 <div style="margin: auto;text-align: center;">
  //                     <img src="{{logoImgUrl}}" height="51">
  //                 </div>
  //                 <div style="padding: 2rem 3.5rem 2.5rem;">
  //                     <p style="letter-spacing: 0.2px;">
  //                         Your wedding date on {{customer.phone}}&nbsp;at {{practiceName}} is now canceled.
  //                         To reschedule your visit, please call the practice at {{practicePhoneNumber}}.
  //                         Thank you!
  //                     </p>
  //                 </div>
  //             </div>
  //             <div class="notable-logo" style="margin: 2rem auto;text-align: center;color: #777;">
  //                 <img src="{{notableLogoUrl}}" width="80" height="32">
  //             </div>
  //         </div>
  //         <div style="font-size: 0.7rem;margin: 2.5rem; text-align: center;">
  //             <a style="color:#adafaf" href="{{unsubscribeUrl}}">
  //                 Unsubscribe ({{recipientEmail}})
  //             </a>
  //         </div>
  //         <div style="opacity: 0">{{currentEpoch}}</div>
  //     </body>
  // </html>`,
};
