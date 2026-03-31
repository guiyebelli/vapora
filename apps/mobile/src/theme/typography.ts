export const fontFamily = {
  heading: 'PlusJakartaSans-Bold',
  headingSemiBold: 'PlusJakartaSans-SemiBold',
  body: 'Inter-Regular',
  bodyMedium: 'Inter-Medium',
} as const;

export const textStyles = {
  display: { fontFamily: fontFamily.heading, fontSize: 32, lineHeight: 40 },
  h1: { fontFamily: fontFamily.heading, fontSize: 26, lineHeight: 34 },
  h2: { fontFamily: fontFamily.headingSemiBold, fontSize: 22, lineHeight: 30 },
  h3: { fontFamily: fontFamily.headingSemiBold, fontSize: 18, lineHeight: 26 },
  body: { fontFamily: fontFamily.body, fontSize: 16, lineHeight: 24 },
  bodySmall: { fontFamily: fontFamily.body, fontSize: 14, lineHeight: 20 },
  caption: { fontFamily: fontFamily.body, fontSize: 12, lineHeight: 16 },
  button: { fontFamily: fontFamily.bodyMedium, fontSize: 16, lineHeight: 24 },
  buttonSmall: { fontFamily: fontFamily.bodyMedium, fontSize: 14, lineHeight: 20 },
} as const;
