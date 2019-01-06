import { html, render } from '../node_modules/lit-html/lit-html.js';

const app = document.getElementById('app');

var firebaseConfig = {
  apiKey: 'AIzaSyBCprPbtTuLpBImfNfvsDw-t0GMrBMaCgw',
  authDomain: 'bitcoin-poll.firebaseapp.com',
  databaseURL: 'https://bitcoin-poll.firebaseio.com',
  projectId: 'bitcoin-poll',
  storageBucket: 'bitcoin-poll.appspot.com',
  messagingSenderId: '961325372688'
};
firebase.initializeApp(firebaseConfig);

let pollSubmissions;

let data = {};

const setSessionName = html`
  <h2>Set a session name</h2>
  <form autocomplete="off" onsubmit="event.preventDefault();">
    <div class="options">
      <div class="mdc-text-field"><input type="textfield" id="session" class="mdc-text-field__input" /></div>
      <button
        class="mdc-button mdc-button--raised"
        @click=${
          () => {
            if (session.value !== '') {
              pollSubmissions = firebase.database().ref(session.value);
              renderQuestion(openingQuestion);
            }
          }
        }
      >
        Done
      </button>
    </div>
  </form>
`;

const done = () => {
  console.log('DONE', data);
  pollSubmissions.push(data);
  data = {};
  renderQuestion(thanks);
};

const cancel = () => {
  console.log('CANCEL', data);
  data = {};
  renderQuestion(openingQuestion);
};

const openingQuestion = html`
  <h2>Have you heard of Bitcoin?</h2>

  <div class="options">
    <button
      class="mdc-button mdc-button--raised"
      @click=${
        () => {
          data.familiar = true;
          renderQuestion(questionTwo);
        }
      }
    >
      Yes
    </button>
    <button
      class="mdc-button mdc-button--raised"
      @click=${
        () => {
          data.familiar = false;
          renderQuestion(learnMore);
        }
      }
    >
      No
    </button>
  </div>
`;

const questionTwo = html`
  <h2>What do you think of Bitcoin?</h2>

  <div class="options">
    <div class="mdc-form-field">
      <div class="mdc-checkbox">
        <input type="checkbox" class="mdc-checkbox__native-control" id="good" />
        <div class="mdc-checkbox__background">
          <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
            <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
          </svg>
          <div class="mdc-checkbox__mixedmark"></div>
        </div>
      </div>
      <label for="good">Good</label>
    </div>
    <div class="mdc-form-field">
      <div class="mdc-checkbox">
        <input type="checkbox" class="mdc-checkbox__native-control" id="bad" />
        <div class="mdc-checkbox__background">
          <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
            <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
          </svg>
          <div class="mdc-checkbox__mixedmark"></div>
        </div>
      </div>
      <label for="bad">Bad</label>
    </div>
    <br />
    <div class="mdc-form-field">
      <div class="mdc-checkbox">
        <input type="checkbox" class="mdc-checkbox__native-control" id="scam" />
        <div class="mdc-checkbox__background">
          <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
            <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
          </svg>
          <div class="mdc-checkbox__mixedmark"></div>
        </div>
      </div>
      <label for="scam">Scam</label>
    </div>
    <div class="mdc-form-field">
      <div class="mdc-checkbox">
        <input type="checkbox" class="mdc-checkbox__native-control" id="investment" />
        <div class="mdc-checkbox__background">
          <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
            <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
          </svg>
          <div class="mdc-checkbox__mixedmark"></div>
        </div>
      </div>
      <label for="investment">Investment</label>
    </div>
    <div class="mdc-form-field">
      <div class="mdc-checkbox">
        <input type="checkbox" class="mdc-checkbox__native-control" id="gambling" />
        <div class="mdc-checkbox__background">
          <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
            <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
          </svg>
          <div class="mdc-checkbox__mixedmark"></div>
        </div>
      </div>
      <label for="gambling">Gambling</label>
    </div>
    <div class="mdc-form-field">
      <div class="mdc-checkbox">
        <input type="checkbox" class="mdc-checkbox__native-control" id="currency" />
        <div class="mdc-checkbox__background">
          <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
            <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
          </svg>
          <div class="mdc-checkbox__mixedmark"></div>
        </div>
      </div>
      <label for="currency">Currency</label>
    </div>
    <div class="mdc-form-field">
      <div class="mdc-checkbox">
        <input type="checkbox" class="mdc-checkbox__native-control" id="gold" />
        <div class="mdc-checkbox__background">
          <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
            <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
          </svg>
          <div class="mdc-checkbox__mixedmark"></div>
        </div>
      </div>
      <label for="gold">Gold</label>
    </div>
    <div class="mdc-form-field">
      <div class="mdc-checkbox">
        <input type="checkbox" class="mdc-checkbox__native-control" id="technology" />
        <div class="mdc-checkbox__background">
          <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
            <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
          </svg>
          <div class="mdc-checkbox__mixedmark"></div>
        </div>
      </div>
      <label for="technology">Technology</label>
    </div>
    <br />
    <button
      class="mdc-button mdc-button--raised"
      @click=${
        () => {
          data.mentions = {};
          data.mentions.good = good.checked;
          data.mentions.bad = bad.checked;
          data.mentions.scam = scam.checked;
          data.mentions.investment = investment.checked;
          data.mentions.gambling = gambling.checked;
          data.mentions.currency = currency.checked;
          data.mentions.gold = gold.checked;
          data.mentions.technology = technology.checked;
          renderQuestion(owned);
        }
      }
    >
      Done
    </button>
  </div>
`;

const owned = html`
  <h2>Have you ever owned any Bitcoin?</h2>
  <div class="options">
    <button
      class="mdc-button mdc-button--raised"
      @click=${
        () => {
          data.owned = true;
          renderQuestion(used);
        }
      }
    >
      Yes
    </button>
    <button
      class="mdc-button mdc-button--raised"
      @click=${
        () => {
          data.owned = false;
          renderQuestion(learnMore);
        }
      }
    >
      No
    </button>
  </div>
`;

const used = html`
  <h2>Have you ever used Bitcoin?</h2>
  <div class="options">
    <button
      class="mdc-button mdc-button--raised"
      @click=${
        () => {
          data.used = true;
          renderQuestion(wantToUse);
        }
      }
    >
      Yes
    </button>
    <button
      class="mdc-button mdc-button--raised"
      @click=${
        () => {
          data.used = false;
          renderQuestion(learnMore);
        }
      }
    >
      No
    </button>
  </div>
`;

const wantToUse = html`
  <h2>Would you like to pay at this store with Bitcoin?</h2>
  <div class="options">
    <button
      class="mdc-button mdc-button--raised"
      @click=${
        () => {
          data.wantToUse = true;
          renderQuestion(learnMore);
        }
      }
    >
      Yes
    </button>
    <button
      class="mdc-button mdc-button--raised"
      @click=${
        () => {
          data.wantToUse = false;
          renderQuestion(learnMore);
        }
      }
    >
      No
    </button>
  </div>
`;

const learnMore = html`
  <h2>Would you like to learn more about Bitcoin?</h2>
  <div class="options">
    <button
      class="mdc-button mdc-button--raised"
      @click=${
        () => {
          data.interested = true;
          renderQuestion(collectEmail);
        }
      }
    >
      Yes
    </button>
    <button
      class="mdc-button mdc-button--raised"
      @click=${
        () => {
          data.interested = false;
          done();
        }
      }
    >
      No
    </button>
  </div>
`;

const collectEmail = html`
  <h2>Please enter an email address</h2>
  <form autocomplete="off" onsubmit="event.preventDefault();">
    <div class="options">
      <div class="mdc-text-field"><input type="email" id="email" class="mdc-text-field__input" /></div>
      <button
        class="mdc-button mdc-button--raised"
        @click=${
          () => {
            data.email = email.value;
            done();
          }
        }
      >
        Done
      </button>
    </div>
  </form>
`;

const thanks = html`
  <h2>Thank you!</h2>
  <button
    class="mdc-button mdc-button--raised"
    @click=${
      () => {
        renderQuestion(openingQuestion);
      }
    }
  >
    Done
  </button>
`;

const renderQuestion = question => {
  render(
    html`
      <style>
        .content {
          display: flex;
          max-width: 500px;
          padding: 40px;
          flex-flow: column;
        }
        .options {
          margin-top: 40px;
          display: flex;
          flex-flow: column;
        }
        button {
          margin-top: 40px;
        }
        .mdc-fab {
          position: absolute;
          margin: 0;
          top: 10px;
          right: 10px;
          font-weight: 700;
        }
      </style>
      <div class="content">${question}</div>
      <button class="mdc-fab" @click=${() => cancel()}>X</button>
    `,
    app
  );
};

renderQuestion(setSessionName);
