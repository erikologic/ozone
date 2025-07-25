export const MOD_EVENTS = {
  ACKNOWLEDGE: 'tools.ozone.moderation.defs#modEventAcknowledge',
  ESCALATE: 'tools.ozone.moderation.defs#modEventEscalate',
  LABEL: 'tools.ozone.moderation.defs#modEventLabel',
  MUTE: 'tools.ozone.moderation.defs#modEventMute',
  MUTE_REPORTER: 'tools.ozone.moderation.defs#modEventMuteReporter',
  TAKEDOWN: 'tools.ozone.moderation.defs#modEventTakedown',
  COMMENT: 'tools.ozone.moderation.defs#modEventComment',
  REVERSE_TAKEDOWN: 'tools.ozone.moderation.defs#modEventReverseTakedown',
  UNMUTE: 'tools.ozone.moderation.defs#modEventUnmute',
  UNMUTE_REPORTER: 'tools.ozone.moderation.defs#modEventUnmuteReporter',
  REPORT: 'tools.ozone.moderation.defs#modEventReport',
  RESOLVE_APPEAL: 'tools.ozone.moderation.defs#modEventResolveAppeal',
  EMAIL: 'tools.ozone.moderation.defs#modEventEmail',
  TAG: 'tools.ozone.moderation.defs#modEventTag',
  DIVERT: 'tools.ozone.moderation.defs#modEventDivert',
  SET_PRIORITY: 'tools.ozone.moderation.defs#modEventPriorityScore',
  APPEAL: 'appeal',
  DISABLE_DMS: 'disableDms',
  ENABLE_DMS: 'enableDms',
  DISABLE_VIDEO_UPLOAD: 'disableVideoUpload',
  ENABLE_VIDEO_UPLOAD: 'enableVideoUpload',
  MAKE_VERIFIER: 'makeVerifier',
  REVOKE_VERIFIER: 'revokeVerifier',
  AGE_ASSURANCE: 'tools.ozone.moderation.defs#ageAssuranceEvent',
  AGE_ASSURANCE_OVERRIDE:
    'tools.ozone.moderation.defs#ageAssuranceOverrideEvent',
} as const

export const MOD_EVENT_TITLES = {
  [MOD_EVENTS.ACKNOWLEDGE]: 'Reports Acknowledged',
  [MOD_EVENTS.ESCALATE]: 'Escalation',
  [MOD_EVENTS.LABEL]: 'Label Action',
  [MOD_EVENTS.MUTE]: 'Mute Action',
  [MOD_EVENTS.MUTE_REPORTER]: 'Reporter Muted',
  [MOD_EVENTS.TAKEDOWN]: 'Takedown Action',
  [MOD_EVENTS.COMMENT]: 'Comment',
  [MOD_EVENTS.REVERSE_TAKEDOWN]: 'Reverse Takedown Action',
  [MOD_EVENTS.UNMUTE]: 'Unmute Action',
  [MOD_EVENTS.UNMUTE_REPORTER]: 'Reporter Unmuted',
  [MOD_EVENTS.REPORT]: 'Report',
  [MOD_EVENTS.EMAIL]: 'Email Sent',
  [MOD_EVENTS.RESOLVE_APPEAL]: 'Appeal Resolved',
  [MOD_EVENTS.TAG]: 'Tag',
  [MOD_EVENTS.SET_PRIORITY]: 'Set Priority',
  [MOD_EVENTS.APPEAL]: 'Appeal',
  [MOD_EVENTS.DIVERT]: 'Divert',
  [MOD_EVENTS.DISABLE_DMS]: 'Disable DMs',
  [MOD_EVENTS.ENABLE_DMS]: 'Enable DMs',
  [MOD_EVENTS.DISABLE_VIDEO_UPLOAD]: 'Disable Video Upload',
  [MOD_EVENTS.ENABLE_VIDEO_UPLOAD]: 'Enable Video Upload',
  [MOD_EVENTS.MAKE_VERIFIER]: 'Make Trusted Verifier',
  [MOD_EVENTS.REVOKE_VERIFIER]: 'Revoke Trusted Verifier',
  [MOD_EVENTS.AGE_ASSURANCE]: 'Age Assurance',
  [MOD_EVENTS.AGE_ASSURANCE_OVERRIDE]: 'Age Assurance Override',
}

export const FILTER_MACROS_LIST_KEY = 'filter_macros_list'

export const AGE_ASSURANCE_OVERRIDE_STATES = {
  ASSURED: 'assured',
  RESET: 'reset',
  BLOCKED: 'blocked',
}

export const AGE_ASSURANCE_STATES = {
  UNKNOWN: 'unknown',
  PENDING: 'pending',
  ...AGE_ASSURANCE_OVERRIDE_STATES,
}
