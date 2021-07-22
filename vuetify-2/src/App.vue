<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app clipped flating temporary> 
      <v-list dense>
        <v-row class="ma-2 mb-3">
        <v-icon class="mx-4" color="red" large>mdi-video</v-icon>
        <v-toolbar-title class="align-center">
          <span class="title">Uğurcan TÜRK</span>
          <v-icon color="red" class="ml-3" @click="drawer = !drawer">mdi-close</v-icon>
        </v-toolbar-title>
        </v-row>
        <v-list-item v-for="item in items" :key="item.icon" link>
          <v-list-item-action>
            <v-icon>{{item.icon}}</v-icon>
             </v-list-item-action>
             <v-list-item-content>
            <v-list-item-title>
              {{item.text}}
            </v-list-item-title>
         </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-icon class="mx-4" color="red" large>mdi-video</v-icon>
      <v-toolbar-title class="align-center">
        <span class="title">VideoCode</span>
      </v-toolbar-title>
      <v-spacer />
      <v-text-field
        class="mt-3"
        placeholder="Search..."
        single-line
        append-icon="mdi-magnify"
        color="red"
      />
      <v-spacer />
      <v-btn class="ml-0" icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <v-btn class="ma-2" icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <div>
        <v-menu
          v-model="menu"
          :close-on-content-click="false"
          :nudge-width="250"
          offset-x
        >
          <template v-slot:activator="{ on }">
            <v-avatar size="40">
              <img
                style="cursor:pointer"
                v-on="on"
                src="data:image/png;base64,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"
              />
            </v-avatar>
          </template>
          <v-card>
            <v-list>
              <v-list-item>
                <v-list-item-avatar></v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Uğurcan TÜRK</v-list-item-title>
                  <v-list-item-subtitle>VideoCode</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider />
            <v-list>
              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-cog</v-icon>
                </v-list-item-action>
                <v-list-item-title>Settings</v-list-item-title>
              </v-list-item>
            </v-list>
            <v-list>
              <v-list-item>
                <v-list-item-action>
                  <v-switch v-model="theme" color="red"></v-switch>
                </v-list-item-action>
                <v-list-item-title>Change Theme</v-list-item-title>
              </v-list-item>
            </v-list>
            <v-card-actions>
              <v-spacer />
              <v-btn color="red" text @click="menu = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </div>
    </v-app-bar>
    <v-content>
      <v-container>
        <v-row class="mb-4">
          <v-col
            sm="6"
            md="4"
            lg="3"
            xl="2"
            v-for="(item, index) in 200"
            :key="index"
          >
            <v-card>
              <v-img
                :lazy-src="`https://picsum.photos/10/6?image=${index + 1}`"
                height="200px"
                :src="`https://picsum.photos/500/300?image=${index + 1}`"
              />
              <v-card-subtitle class="">Number {{ item }}</v-card-subtitle>
              <v-card-text class="text--primary">
                <div>Header Area</div>
                <div>Header Content</div>
              </v-card-text>
              <v-card-actions>
                <v-btn color="red" text>Save</v-btn>
                <v-btn color="red" text>Share</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    items: [
      {
        icon: "mdi-trending-up",
        text: "Popolar Content"
      },
      {
        icon: "mdi-youtube-subscription",
        text: "Follow"
      },
      {
        icon: "mdi-history",
        text: "History"
      },
      {
        icon: "mdi-playlist-play",
        text: "Playlist"
      },
      {
        icon: "mdi-clock",
        text: "Clock"
      },
    ],
    drawer: false,
    menu: false,
    theme: false,
  }),
  watch: {
    theme: function(next) {
      this.$vuetify.theme.dark = next;
    },
  },
};
</script>
