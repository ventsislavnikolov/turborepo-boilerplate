// Use type safe message keys with `next-intl`
type Messages = typeof import("next-intl-locales-custom/messages/en.json");
declare interface IntlMessages extends Messages {}
