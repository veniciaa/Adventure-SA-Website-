
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

export default function App() {
  const [screen, setScreen] = useState("home");
  const [progress, setProgress] = useState(45);
  const [liked, setLiked] = useState(false);
  const [search, setSearch] = useState("");

  const green = "#216B3A";
  const darkGreen = "#123D27";
  const lightGreen = "#EAF4E8";
  const yellow = "#F4C430";
  const brown = "#8A5A3B";
  const cream = "#FFFDF7";

  const categories = [
    {
      title: "Healthy Living",
      subtitle: "Better habits for a healthier you.",
      icon: "🌿",
      color: green,
    },
    {
      title: "Life Hacks",
      subtitle: "Simple tips for big changes.",
      icon: "💡",
      color: yellow,
    },
    {
      title: "Productivity",
      subtitle: "Get more done, stress less.",
      icon: "⭐",
      color: brown,
    },
  ];

  const completeTask = () => {
    setProgress((old) => Math.min(old + 10, 100));
  };

  const Header = () => (
    <View style={styles.header}>
      <View style={styles.logoCircle}>
        <Text style={{ fontSize: 20 }}>🌿</Text>
      </View>

      <Text style={styles.logoText}> Adventure </Text>

      <View style={styles.headerRight}>
        <TouchableOpacity style={styles.headerLink}>
          <Text style={styles.headerLinkText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.headerLink}>
          <Text style={styles.headerLinkText}>Explore</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.headerLink}>
          <Text style={styles.headerLinkText}>Saved</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const SearchBar = () => (
    <View style={styles.searchContainer}>
      <TextInput
        placeholder="Search life hacks..."
        placeholderTextColor="#777"
        value={search}
        onChangeText={setSearch}
        style={styles.searchInput}
      />

      <TouchableOpacity style={styles.searchButton}>
        <Text style={{ color: "#fff", fontSize: 17 }}>⌕</Text>
      </TouchableOpacity>
    </View>
  );

  const CategoryCard = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.85}
      style={styles.categoryCard}
      onPress={() => setScreen(item.title)}
    >
      <View
        style={[
          styles.categoryIcon,
          { backgroundColor: item.color },
        ]}
      >
        <Text style={{ fontSize: 25 }}>{item.icon}</Text>
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.categoryTitle}>{item.title}</Text>
        <Text style={styles.categorySubtitle}>{item.subtitle}</Text>
      </View>

      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );

  const BottomNav = () => (
    <View style={styles.bottomNav}>
      <TouchableOpacity onPress={() => setScreen("home")}>
        <Text style={screen === "home" ? styles.activeNav : styles.navIcon}>
          🏠
        </Text>
        <Text style={screen === "home" ? styles.activeNavText : styles.navText}>
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setScreen("Explore")}>
        <Text style={styles.navIcon}>🧭</Text>
        <Text style={styles.navText}>Explore</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setScreen("Saved")}>
        <Text style={styles.navIcon}>♡</Text>
        <Text style={styles.navText}>Saved</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setScreen("Profile")}>
        <Text style={styles.navIcon}>●</Text>
        <Text style={styles.navText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );

  const Home = () => (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scroll}
    >
      <SearchBar />

      <View style={styles.hero}>
        <View style={{ flex: 1 }}>
          <Text style={styles.smallLabel}>WELCOME BACK</Text>

          <Text style={styles.heroTitle}>
            Live Smarter{"\n"}Every Day
          </Text>

          <Text style={styles.heroText}>
            Discover useful life hacks, build better habits and make
            everyday life easier.
          </Text>

          <TouchableOpacity
            style={styles.greenButton}
            onPress={() => setScreen("Explore")}
          >
            <Text style={styles.buttonText}>Get Started →</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.heroImage}>
          <Text style={{ fontSize: 55 }}>🌱</Text>
          <Text style={{ fontSize: 35 }}>☕</Text>
          <Text style={{ fontSize: 20 }}>📖</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Explore Categories</Text>

      {categories.map((item, index) => (
        <CategoryCard item={item} key={index} />
      ))}

      <View style={styles.tipCard}>
        <View style={styles.tipIcon}>
          <Text style={{ fontSize: 25 }}>💡</Text>
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.tipTitle}>Today's Life Hack</Text>
          <Text style={styles.tipText}>
            Freeze bread to keep it fresh for longer.
          </Text>
        </View>

        <TouchableOpacity onPress={completeTask}>
          <Text style={styles.tipArrow}>→</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );

  const ProgressScreen = () => (
    <ScrollView contentContainerStyle={styles.scroll}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => setScreen("home")}
      >
        <Text style={{ fontSize: 22 }}>←</Text>
      </TouchableOpacity>

      <View style={styles.progressHero}>
        <View style={styles.bigLeaf}>
          <Text style={{ fontSize: 45 }}>🌿</Text>
        </View>

        <Text style={styles.progressTitle}>Your Progress</Text>

        <Text style={styles.progressSubtitle}>
          Small steps. Big results.
        </Text>
      </View>

      <View style={styles.progressCard}>
        <View style={styles.progressRow}>
          <Text style={styles.level}>Level 3</Text>
          <Text style={styles.xp}>{progress} XP</Text>
        </View>

        <View style={styles.progressBackground}>
          <View
            style={[
              styles.progressFill,
              { width: `${progress}%` },
            ]}
          />
        </View>

        <Text style={styles.progressPercent}>
          {progress}% completed
        </Text>
      </View>

      <TouchableOpacity style={styles.menuCard} onPress={completeTask}>
        <Text style={styles.menuIcon}>🏆</Text>
        <View style={{ flex: 1 }}>
          <Text style={styles.menuTitle}>Achievements</Text>
          <Text style={styles.menuSubtitle}>
            Keep completing your goals
          </Text>
        </View>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuCard}>
        <Text style={styles.menuIcon}>⚙️</Text>
        <View style={{ flex: 1 }}>
          <Text style={styles.menuTitle}>Settings</Text>
          <Text style={styles.menuSubtitle}>
            Personalise your experience
          </Text>
        </View>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuCard}>
        <Text style={styles.menuIcon}>❔</Text>
        <View style={{ flex: 1 }}>
          <Text style={styles.menuTitle}>Help & Support</Text>
          <Text style={styles.menuSubtitle}>
            Get help when you need it
          </Text>
        </View>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>
    </ScrollView>
  );

  const CategoryScreen = ({ title }) => {
    const data = categories.find((x) => x.title === title);

    return (
      <ScrollView contentContainerStyle={styles.scroll}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => setScreen("home")}
        >
          <Text style={{ fontSize: 22 }}>←</Text>
        </TouchableOpacity>

        <View
          style={[
            styles.categoryHero,
            { backgroundColor: data?.color || green },
          ]}
        >
          <Text style={{ fontSize: 60 }}>{data?.icon || "🌿"}</Text>

          <Text style={styles.categoryHeroTitle}>{title}</Text>

          <Text style={styles.categoryHeroText}>
            Discover simple ideas that can make your everyday life
            easier and better.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Featured Tips</Text>

        <View style={styles.featureCard}>
          <Text style={styles.featureNumber}>01</Text>
          <Text style={styles.featureTitle}>
            Start with small changes
          </Text>
          <Text style={styles.featureText}>
            Small improvements repeated every day can become powerful
            habits over time.
          </Text>

          <TouchableOpacity
            style={styles.smallButton}
            onPress={completeTask}
          >
            <Text style={styles.smallButtonText}>Complete ✓</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.featureCard}>
          <Text style={styles.featureNumber}>02</Text>
          <Text style={styles.featureTitle}>
            Keep your routine simple
          </Text>
          <Text style={styles.featureText}>
            Choose practical habits that fit naturally into your daily
            routine.
          </Text>

          <TouchableOpacity
            style={styles.smallYellowButton}
            onPress={completeTask}
          >
            <Text style={styles.smallButtonText}>Try it →</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  };

  const Explore = () => (
    <ScrollView contentContainerStyle={styles.scroll}>
      <SearchBar />

      <Text style={styles.exploreTitle}>Discover Something New</Text>

      <View style={styles.largeExploreCard}>
        <Text style={styles.exploreEmoji}>🌿</Text>

        <Text style={styles.largeExploreTitle}>
          Better Habits{"\n"}Brighter Days
        </Text>

        <Text style={styles.exploreText}>
          Take control of your time, your goals and your daily routine.
        </Text>

        <TouchableOpacity
          style={styles.yellowButton}
          onPress={() => setScreen("Healthy Living")}
        >
          <Text style={styles.darkButtonText}>Start Now →</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Popular</Text>

      {categories.map((item, index) => (
        <CategoryCard item={item} key={index} />
      ))}
    </ScrollView>
  );

  const Saved = () => (
    <ScrollView contentContainerStyle={styles.scroll}>
      <Text style={styles.exploreTitle}>Saved Tips</Text>

      <View style={styles.savedCard}>
        <View style={styles.savedIcon}>
          <Text>💡</Text>
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.menuTitle}>Freeze bread</Text>
          <Text style={styles.menuSubtitle}>
            Keep bread fresh for longer.
          </Text>
        </View>

        <TouchableOpacity onPress={() => setLiked(!liked)}>
          <Text style={{ fontSize: 28 }}>
            {liked ? "♥" : "♡"}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.savedCard}>
        <View style={styles.savedIcon}>
          <Text>🌿</Text>
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.menuTitle}>Healthy habits</Text>
          <Text style={styles.menuSubtitle}>
            Build small habits every day.
          </Text>
        </View>

        <Text style={{ fontSize: 24 }}>♥</Text>
      </View>
    </ScrollView>
  );

  const Profile = () => (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.profileTop}>
        <View style={styles.profileCircle}>
          <Text style={{ fontSize: 35 }}>👤</Text>
        </View>

        <Text style={styles.profileName}>Your Profile</Text>

        <Text style={styles.profileSub}>
          Keep growing every day 🌱
        </Text>
      </View>

      <View style={styles.profileStats}>
        <View>
          <Text style={styles.statNumber}>{progress}%</Text>
          <Text style={styles.statLabel}>Progress</Text>
        </View>

        <View>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Tips</Text>
        </View>

        <View>
          <Text style={styles.statNumber}>3</Text>
          <Text style={styles.statLabel}>Level</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.greenButton}
        onPress={() => setScreen("Progress")}
      >
        <Text style={styles.buttonText}>View My Progress →</Text>
      </TouchableOpacity>
    </ScrollView>
  );

  let content;

  if (screen === "home") content = <Home />;
  else if (screen === "Explore") content = <Explore />;
  else if (screen === "Saved") content = <Saved />;
  else if (screen === "Profile") content = <Profile />;
  else if (screen === "Progress") content = <ProgressScreen />;
  else content = <CategoryScreen title={screen} />;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={darkGreen}
      />

      <Header />

      <View style={styles.content}>{content}</View>

      <BottomNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F7F0",
  },

  content: {
    flex: 1,
  },

  header: {
    minHeight: 70,
    backgroundColor: "#123D27",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },

  logoCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#F4C430",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  logoText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "800",
  },

  headerRight: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  headerLink: {
    marginHorizontal: 8,
  },

  headerLinkText: {
    color: "#fff",
    fontSize: 12,
  },

  loginButton: {
    backgroundColor: "#F4C430",
    paddingHorizontal: 15,
    paddingVertical: 9,
    borderRadius: 18,
    marginLeft: 10,
  },

  loginText: {
    color: "#173C25",
    fontWeight: "800",
  },

  scroll: {
    padding: 20,
    paddingBottom: 100,
  },

  searchContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#DDD",
    height: 48,
    marginBottom: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },

  searchInput: {
    flex: 1,
    paddingHorizontal: 18,
    fontSize: 14,
  },

  searchButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#216B3A",
    alignItems: "center",
    justifyContent: "center",
  },

  hero: {
    backgroundColor: "#EAF4E8",
    borderRadius: 25,
    padding: 22,
    flexDirection: "row",
    minHeight: 280,
    elevation: 7,
    shadowColor: "#173C25",
    shadowOpacity: 0.18,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 7 },
    marginBottom: 25,
    overflow: "hidden",
  },

  smallLabel: {
    color: "#216B3A",
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 1,
    marginBottom: 8,
  },

  heroTitle: {
    color: "#123D27",
    fontSize: 36,
    fontWeight: "900",
    lineHeight: 40,
  },

  heroText: {
    color: "#526257",
    fontSize: 14,
    lineHeight: 21,
    marginTop: 12,
    marginBottom: 20,
    maxWidth: 330,
  },

  heroImage: {
    width: 170,
    height: 180,
    backgroundColor: "#D9E9D2",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ rotate: "2deg" }],
    elevation: 8,
    marginLeft: 10,
  },

  greenButton: {
    backgroundColor: "#216B3A",
    paddingHorizontal: 22,
    paddingVertical: 13,
    borderRadius: 25,
    alignSelf: "flex-start",
    elevation: 5,
    shadowColor: "#123D27",
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 4 },
  },

  buttonText: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 14,
  },

  sectionTitle: {
    color: "#123D27",
    fontSize: 22,
    fontWeight: "900",
    marginBottom: 13,
  },

  categoryCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 14,
    marginBottom: 13,
    flexDirection: "row",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.09,
    shadowRadius: 7,
    shadowOffset: { width: 0, height: 4 },
  },

  categoryIcon: {
    width: 55,
    height: 55,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
    elevation: 4,
  },

  categoryTitle: {
    color: "#193D29",
    fontSize: 16,
    fontWeight: "900",
  },

  categorySubtitle: {
    color: "#777",
    fontSize: 12,
    marginTop: 3,
  },

  arrow: {
    color: "#216B3A",
    fontSize: 30,
    fontWeight: "300",
  },

  tipCard: {
    backgroundColor: "#8A5A3B",
    borderRadius: 20,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    elevation: 6,
  },

  tipIcon: {
    width: 50,
    height: 50,
    borderRadius: 16,
    backgroundColor: "#F4C430",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 13,
  },

  tipTitle: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "900",
  },

  tipText: {
    color: "#F8EEE8",
    fontSize: 12,
    marginTop: 3,
  },

  tipArrow: {
    color: "#fff",
    fontSize: 25,
  },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 72,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    elevation: 15,
  },

  navIcon: {
    textAlign: "center",
    fontSize: 20,
    color: "#777",
  },

  activeNav: {
    textAlign: "center",
    fontSize: 20,
    color: "#216B3A",
  },

  navText: {
    color: "#777",
    fontSize: 10,
    textAlign: "center",
    marginTop: 3,
  },

  activeNavText: {
    color: "#216B3A",
    fontSize: 10,
    fontWeight: "800",
    textAlign: "center",
    marginTop: 3,
  },

  backButton: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
    elevation: 4,
  },

  progressHero: {
    backgroundColor: "#DDEBD8",
    borderRadius: 25,
    padding: 25,
    alignItems: "center",
    marginBottom: 18,
    elevation: 6,
  },

  bigLeaf: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#216B3A",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },

  progressTitle: {
    fontSize: 28,
    fontWeight: "900",
    color: "#123D27",
  },

  progressSubtitle: {
    color: "#667268",
    marginTop: 5,
  },

  progressCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
    elevation: 5,
  },

  progressRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  level: {
    fontWeight: "900",
    color: "#123D27",
  },

  xp: {
    color: "#8A5A3B",
    fontWeight: "800",
  },

  progressBackground: {
    height: 13,
    backgroundColor: "#E6E6E6",
    borderRadius: 8,
    marginTop: 15,
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    backgroundColor: "#216B3A",
    borderRadius: 8,
  },

  progressPercent: {
    textAlign: "right",
    marginTop: 8,
    color: "#777",
    fontSize: 12,
  },

  menuCard: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    elevation: 4,
  },

  menuIcon: {
    fontSize: 25,
    marginRight: 14,
  },

  menuTitle: {
    color: "#193D29",
    fontSize: 15,
    fontWeight: "900",
  },

  menuSubtitle: {
    color: "#777",
    fontSize: 11,
    marginTop: 3,
  },

  categoryHero: {
    borderRadius: 28,
    padding: 30,
    minHeight: 270,
    justifyContent: "center",
    elevation: 8,
    marginBottom: 25,
  },

  categoryHeroTitle: {
    color: "#fff",
    fontSize: 34,
    fontWeight: "900",
    marginTop: 15,
  },

  categoryHeroText: {
    color: "#fff",
    lineHeight: 21,
    marginTop: 8,
    maxWidth: 450,
  },

  featureCard: {
    backgroundColor: "#fff",
    borderRadius: 22,
    padding: 22,
    marginBottom: 15,
    elevation: 5,
  },

  featureNumber: {
    color: "#216B3A",
    fontWeight: "900",
    fontSize: 12,
  },

  featureTitle: {
    color: "#123D27",
    fontSize: 21,
    fontWeight: "900",
    marginTop: 8,
  },

  featureText: {
    color: "#777",
    lineHeight: 20,
    marginTop: 8,
  },

  smallButton: {
    backgroundColor: "#216B3A",
    padding: 12,
    borderRadius: 18,
    alignSelf: "flex-start",
    marginTop: 15,
  },

  smallYellowButton: {
    backgroundColor: "#F4C430",
    padding: 12,
    borderRadius: 18,
    alignSelf: "flex-start",
    marginTop: 15,
  },

  smallButtonText: {
    color: "#fff",
    fontWeight: "800",
  },

  exploreTitle: {
    color: "#123D27",
    fontSize: 27,
    fontWeight: "900",
    marginBottom: 20,
  },

  largeExploreCard: {
    backgroundColor: "#216B3A",
    borderRadius: 28,
    padding: 28,
    minHeight: 320,
    justifyContent: "center",
    elevation: 9,
    marginBottom: 25,
  },

  exploreEmoji: {
    fontSize: 60,
    marginBottom: 10,
  },

  largeExploreTitle: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "900",
    lineHeight: 35,
  },

  exploreText: {
    color: "#E8F4E8",
    lineHeight: 20,
    marginTop: 12,
    marginBottom: 20,
    maxWidth: 450,
  },

  yellowButton: {
    backgroundColor: "#F4C430",
    paddingHorizontal: 20,
    paddingVertical: 13,
    borderRadius: 25,
    alignSelf: "flex-start",
    elevation: 5,
  },

  darkButtonText: {
    color: "#123D27",
    fontWeight: "900",
  },

  savedCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    elevation: 5,
  },

  savedIcon: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: "#EAF4E8",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 13,
  },

  profileTop: {
    backgroundColor: "#EAF4E8",
    borderRadius: 25,
    padding: 30,
    alignItems: "center",
    marginBottom: 20,
    elevation: 6,
  },

  profileCircle: {
    width: 95,
    height: 95,
    borderRadius: 48,
    backgroundColor: "#216B3A",
    alignItems: "center",
    justifyContent: "center",
  },

  profileName: {
    color: "#123D27",
    fontSize: 27,
    fontWeight: "900",
    marginTop: 15,
  },

  profileSub: {
    color: "#667268",
    marginTop: 5,
  },

  profileStats: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 22,
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    elevation: 5,
  },

  statNumber: {
    color: "#216B3A",
    fontSize: 24,
    fontWeight: "900",
    textAlign: "center",
  },

  statLabel: {
    color: "#777",
    fontSize: 11,
    textAlign: "center",
    marginTop: 4,
  },
});