import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		dark: false,
		themes: {
			light: {
				primary: "#1976D2",
				secondary: "#424242",
				accent: "#82B1FF",
				error: "#FF5252",
				info: "#2196F3",
				success: "#4CAF50",
				warning: "#FFC107",
			},
			dark: {
				primary: "#607d8b",
				secondary: "#131722",
				accent: "#00bcd4",
				error: "#f44336",
				warning: "#ff9800",
				info: "#ffeb3b",
				success: "#03a9f4",
			},
		},
	},
});
