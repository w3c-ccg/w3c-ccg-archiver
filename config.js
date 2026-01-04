export default {
  community: 'w3c-ccg',
  logDir: './logs',
  archive: {
    host: 'meet.w3c-ccg.org',
    directory: '/archives/',
    username: 'cgbot',
    url: 'https://meet.w3c-ccg.org/archives/',
    privateKey: ''
  },
  meetings: [{
    name: 'CCG Atlantic Weekly',
    email: 'public-credentials@w3.org',
    googleMeetId: 'dzc-yjfq-tyf'
  }, {
    name: 'VCs for Education',
    email: 'public-credentials@w3.org',
    googleMeetId: 'kte-hamg-bpj'
  }, {
    name: 'CCG VCALM',
    email: 'public-credentials@w3.org',
    googleMeetId: 'fuw-kgcv-yar'
  }, {
    name: 'CCG Data Integrity',
    email: 'public-credentials@w3.org',
    googleMeetId: 'gfr-xkgz-pox'
  }, {
    name: 'CCG Incubation',
    email: 'public-credentials@w3.org',
    googleMeetId: 'osb-nmyo-muh'
  }, {
    name: 'CCG Asia-Pacific',
    email: 'public-credentials@w3.org',
    googleMeetId: 'har-kjhr-mrb'
  }, {
    name: 'DID WG Special Topic',
    email: 'public-did-wg@w3.org',
    googleMeetId: 'ydj-wmnw-dto'
  }, {
    name: 'VCWG Spec Refinement',
    email: 'public-vc-wg@w3.org',
    googleMeetId: 'tbs-dswy-rpo',
    htmlTemplate: 'templates/w3c-wg-meeting-template.html'
  }],
  geminiApiKey: '',
  googleApiOauth2Token: ''
}
