const settings = {
    theme: "dark",
    language: "en",
    notifications: true
};

type SettingKey = keyof typeof settings;

function getSetting(key: SettingKey) {
    console.log(settings[key]);
}

getSetting("theme");
getSetting("language");
getSetting("notifications");