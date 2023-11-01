import { View, FlatList, Image, Text } from "react-native";
import React, { useRef, useState } from "react";
import { constants, theme, COLORS, SIZES, FONTS } from "../constants";
import { Path, Svg } from "react-native-svg";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { TextButton } from "../component";
const OnBoardScreen = () => {
  const currentIndex = useRef(0);
  const screenFlatListRef = useRef(0);
  const titleFlatListRef = useRef(0);
  const [isLastItem, setIsLastItem] = useState(false);
  const handleNextPress = () => {
    if (currentIndex.current < constants.onboarding_screens.length - 1) {
      currentIndex.current += 1;
      const nextIndex = currentIndex.current;
      const offset = nextIndex * SIZES.width;
      screenFlatListRef?.current?.scrollToOffset({
        offset,
        animated: true,
      });
      titleFlatListRef?.current.scrollToOffset({
        offset,
        animated: true,
      });
      if (currentIndex.current === constants.onboarding_screens.length - 1) {
        setIsLastItem(true);
      }
    }
  };
  const controlX = SIZES.width / 2;

  return (
    <View
      style={{
        flex: 1,
      }}>
      <View style={{ flex: 2, backgroundColor: COLORS.primary50 }}>
        <FlatList
          ref={screenFlatListRef}
          decelerationRate="fast"
          snapToInterval={SIZES.width}
          snapToAlignment="center"
          scrollEnabled={false}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          data={constants.onboarding_screens}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  width: SIZES.width,
                }}>
                <Image
                  source={item.image}
                  resizeMode="contain"
                  style={{
                    width: SIZES.width * 0.8,
                    height: SIZES.height * 0.8,
                    marginTop: SIZES.padding * 3,
                  }}
                />
              </View>
            );
          }}
        />
      </View>
      <View style={{ flex: 1, backgroundColor: COLORS.gray900 }}>
        <Svg
          style={{ position: "absolute", top: -100 }}
          height={100}
          width={SIZES.width}>
          <Path
            d={`M 0 20 Q ${controlX} 130 ${SIZES.width} 20 L ${SIZES.width} 100 L 0 100 Z`}
            fill={COLORS.gray900}></Path>
        </Svg>
        <FlatList
          ref={titleFlatListRef}
          data={constants.onboarding_screens}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          scrollEnabled={false}
          decelerationRate={"fast"}
          snapToInterval={SIZES.width}
          snapToAlignment="center"
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  paddingHorizontal: SIZES.padding,
                  width: SIZES.width,
                  alignItems: "center",
                }}>
                <Text
                  style={{
                    fontSize: 32,
                    textAlign: "center",
                    color: COLORS.primary100,
                  }}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    textAlign: "center",
                    color: COLORS.primary100,
                    marginTop: SIZES.radius,
                  }}>
                  {item.desc}
                </Text>
              </View>
            );
          }}
        />
        <TextButton
          label={isLastItem ? "Get Started" : "Next"}
          contentContainerStyle={{
            marginHorizontal: SIZES.padding,
            marginBottom: SIZES.padding,
          }}
          onPress={handleNextPress}
        />
      </View>
    </View>
  );
};

export default OnBoardScreen;
