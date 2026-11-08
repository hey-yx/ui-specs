---
title: "Flutter Typography 类文档"
source: https://api.flutter.dev/flutter/material/Typography-class.html
section: type
tag: "工程"
fetched: 2026-10-17
status: full
id: type-6
publisher: "Flutter / Google"
---

# Flutter Typography 类文档

> 来源：[https://api.flutter.dev/flutter/material/Typography-class.html](https://api.flutter.dev/flutter/material/Typography-class.html)

---

The color and geometry TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)s for Material apps.

The text theme provided by the overall Theme(https://api.flutter.dev/flutter/material/Theme-class.html),
ThemeData.textTheme(https://api.flutter.dev/flutter/material/ThemeData/textTheme.html), is based on the current locale's
MaterialLocalizations.scriptCategory(https://api.flutter.dev/flutter/material/MaterialLocalizations/scriptCategory.html) and is created
by merging a color text theme - black(https://api.flutter.dev/flutter/material/Typography/black.html) for
Brightness.light(https://api.flutter.dev/flutter/dart-ui/Brightness.html) themes and white(https://api.flutter.dev/flutter/material/Typography/white.html) for Brightness.dark(https://api.flutter.dev/flutter/dart-ui/Brightness.html)
themes - and a geometry text theme, one of englishLike(https://api.flutter.dev/flutter/material/Typography/englishLike.html), dense(https://api.flutter.dev/flutter/material/Typography/dense.html),
or tall(https://api.flutter.dev/flutter/material/Typography/tall.html), depending on the locale.

To lookup the localized text theme use
Theme.of(context).textTheme.

The color text themes are blackMountainView(https://api.flutter.dev/flutter/material/Typography/blackMountainView-constant.html), whiteMountainView(https://api.flutter.dev/flutter/material/Typography/whiteMountainView-constant.html),
blackCupertino(https://api.flutter.dev/flutter/material/Typography/blackCupertino-constant.html), and whiteCupertino(https://api.flutter.dev/flutter/material/Typography/whiteCupertino-constant.html). The Mountain View theme TextStyle(https://api.flutter.dev/flutter/painting/TextStyle-class.html)s
are based on the Roboto fonts as used on Android. The Cupertino themes are
based on the San Francisco
font(https://developer.apple.com/design/human-interface-guidelines/typography/)
fonts as used by Apple on iOS.

Two sets of geometry themes are provided: 2014 and 2018. The 2014 themes
correspond to the original version of the Material Design spec and are
the defaults. The 2018 themes correspond the second iteration of the
specification and feature different font sizes, font weights, and
letter spacing values.

By default, ThemeData.typography(https://api.flutter.dev/flutter/material/ThemeData/typography.html) is Typography.material2014(platform: platform) which uses englishLike2014(https://api.flutter.dev/flutter/material/Typography/englishLike2014-constant.html), dense2014(https://api.flutter.dev/flutter/material/Typography/dense2014-constant.html) and tall2014(https://api.flutter.dev/flutter/material/Typography/tall2014-constant.html). To use
the 2018 text theme geometries, specify a value using the Typography.material2018(https://api.flutter.dev/flutter/material/Typography/Typography.material2018.html)
constructor:

typography: Typography.material2018(platform: platform)

See also:

- material.io/design/typography/(https://material.io/design/typography/)

- m3.material.io/styles/typography(https://m3.material.io/styles/typography)

 
 
 

 
 
 Mixed-in types
 
 
 
- Diagnosticable(https://api.flutter.dev/flutter/foundation/Diagnosticable-mixin.html)
 

 

 
 
 Annotations
 
 
 
- @immutable(https://api.flutter.dev/flutter/meta/immutable-constant.html)
 

 

 
 

 
 
 

## Constructors

 
 
 Typography(https://api.flutter.dev/flutter/material/Typography/Typography.html)({TargetPlatform(https://api.flutter.dev/flutter/foundation/TargetPlatform.html)? platform, TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)? black, TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)? white, TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)? englishLike, TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)? dense, TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)? tall})
 
 
 Creates a typography instance.
 factory

 
 
 Typography.material2014(https://api.flutter.dev/flutter/material/Typography/Typography.material2014.html)({TargetPlatform(https://api.flutter.dev/flutter/foundation/TargetPlatform.html)? platform = TargetPlatform.android, TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)? black, TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)? white, TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)? englishLike, TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)? dense, TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)? tall})
 
 
 Creates a typography instance using Material Design's 2014 defaults.
 factory

 
 
 Typography.material2018(https://api.flutter.dev/flutter/material/Typography/Typography.material2018.html)({TargetPlatform(https://api.flutter.dev/flutter/foundation/TargetPlatform.html)? platform = TargetPlatform.android, TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)? black, TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)? white, TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)? englishLike, TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)? dense, TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)? tall})
 
 
 Creates a typography instance using Material Design's 2018 defaults.
 factory

 
 
 Typography.material2021(https://api.flutter.dev/flutter/material/Typography/Typography.material2021.html)({TargetPlatform(https://api.flutter.dev/flutter/foundation/TargetPlatform.html)? platform = TargetPlatform.android, ColorScheme(https://api.flutter.dev/flutter/material/ColorScheme-class.html) colorScheme = const ColorScheme.light(), TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)? black, TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)? white, TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)? englishLike, TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)? dense, TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)? tall})
 
 
 Creates a typography instance using Material Design 3 2021 defaults.
 factory

 
 
 

 
 
 

## Properties

 
 
 black(https://api.flutter.dev/flutter/material/Typography/black.html)
 → TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)
 

 A Material Design text theme with dark glyphs.
 final

 
 dense(https://api.flutter.dev/flutter/material/Typography/dense.html)
 → TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)
 

 Defines text geometry for dense scripts, such as Chinese, Japanese
and Korean.
 final

 
 englishLike(https://api.flutter.dev/flutter/material/Typography/englishLike.html)
 → TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)
 

 Defines text geometry for ScriptCategory.englishLike scripts, such as
English, French, Russian, etc.
 final

 
 hashCode(https://api.flutter.dev/flutter/material/Typography/hashCode.html)
 → int(https://api.flutter.dev/flutter/dart-core/int-class.html)
 

 The hash code for this object.
 no setteroverride

 
 runtimeType(https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html)
 → Type(https://api.flutter.dev/flutter/dart-core/Type-class.html)
 

 A representation of the runtime type of the object.
 no setterinherited

 
 tall(https://api.flutter.dev/flutter/material/Typography/tall.html)
 → TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)
 

 Defines text geometry for tall scripts, such as Farsi, Hindi, and Thai.
 final

 
 white(https://api.flutter.dev/flutter/material/Typography/white.html)
 → TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)
 

 A Material Design text theme with light glyphs.
 final

 
 

 
 
 

## Methods

 
 
 copyWith(https://api.flutter.dev/flutter/material/Typography/copyWith.html)({TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)? black, TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)? white, TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)? englishLike, TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)? dense, TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)? tall})
 → Typography(https://api.flutter.dev/flutter/material/Typography-class.html)
 
 

 Creates a copy of this Typography(https://api.flutter.dev/flutter/material/Typography-class.html) with the given fields
replaced by the non-null parameter values.
 

 
 debugFillProperties(https://api.flutter.dev/flutter/material/Typography/debugFillProperties.html)(DiagnosticPropertiesBuilder(https://api.flutter.dev/flutter/foundation/DiagnosticPropertiesBuilder-class.html) properties)
 → void
 
 

 Add additional properties associated with the node.
 override

 
 geometryThemeFor(https://api.flutter.dev/flutter/material/Typography/geometryThemeFor.html)(ScriptCategory(https://api.flutter.dev/flutter/material/ScriptCategory.html) category)
 → TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)
 
 

 Returns one of englishLike(https://api.flutter.dev/flutter/material/Typography/englishLike.html), dense(https://api.flutter.dev/flutter/material/Typography/dense.html), or tall(https://api.flutter.dev/flutter/material/Typography/tall.html).
 

 
 noSuchMethod(https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html)(Invocation(https://api.flutter.dev/flutter/dart-core/Invocation-class.html) invocation)
 → dynamic
 
 

 Invoked when a nonexistent method or property is accessed.
 inherited

 
 toDiagnosticsNode(https://api.flutter.dev/flutter/foundation/Diagnosticable/toDiagnosticsNode.html)({String(https://api.flutter.dev/flutter/dart-core/String-class.html)? name, DiagnosticsTreeStyle(https://api.flutter.dev/flutter/foundation/DiagnosticsTreeStyle.html)? style})
 → DiagnosticsNode(https://api.flutter.dev/flutter/foundation/DiagnosticsNode-class.html)
 
 

 Returns a debug representation of the object that is used by debugging
tools and by DiagnosticsNode.toStringDeep(https://api.flutter.dev/flutter/foundation/DiagnosticsNode/toStringDeep.html).
 inherited

 
 toString(https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html)({DiagnosticLevel(https://api.flutter.dev/flutter/foundation/DiagnosticLevel.html) minLevel = DiagnosticLevel.info})
 → String(https://api.flutter.dev/flutter/dart-core/String-class.html)
 
 

 A string representation of this object.
 inherited

 
 toStringShort(https://api.flutter.dev/flutter/foundation/Diagnosticable/toStringShort.html)()
 → String(https://api.flutter.dev/flutter/dart-core/String-class.html)
 
 

 A brief description of this object, usually just the runtimeType(https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html) and the
hashCode(https://api.flutter.dev/flutter/dart-core/Object/hashCode.html).
 inherited

 
 

 
 
 

## Operators

 
 
 operator ==(https://api.flutter.dev/flutter/material/Typography/operator_equals.html)(Object(https://api.flutter.dev/flutter/dart-core/Object-class.html) other)
 → bool(https://api.flutter.dev/flutter/dart-core/bool-class.html)
 
 

 The equality operator.
 override

 
 

 
 
 
 

## Static Methods

 
 
 lerp(https://api.flutter.dev/flutter/material/Typography/lerp.html)(Typography(https://api.flutter.dev/flutter/material/Typography-class.html) a, Typography(https://api.flutter.dev/flutter/material/Typography-class.html) b, double(https://api.flutter.dev/flutter/dart-core/double-class.html) t)
 → Typography(https://api.flutter.dev/flutter/material/Typography-class.html)
 
 

 Linearly interpolate between two Typography(https://api.flutter.dev/flutter/material/Typography-class.html) objects.
 

 
 

 

 
 

## Constants

 
 
 blackCupertino(https://api.flutter.dev/flutter/material/Typography/blackCupertino-constant.html)
 → const TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)
 

 A Material Design text theme with dark glyphs based on San Francisco.
 

 
 blackHelsinki(https://api.flutter.dev/flutter/material/Typography/blackHelsinki-constant.html)
 → const TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)
 

 A Material Design text theme with dark glyphs based on Roboto, with
fallback fonts that are likely (but not guaranteed) to be installed on
Linux.
 

 
 blackMountainView(https://api.flutter.dev/flutter/material/Typography/blackMountainView-constant.html)
 → const TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)
 

 A Material Design text theme with dark glyphs based on Roboto.
 

 
 blackRedmond(https://api.flutter.dev/flutter/material/Typography/blackRedmond-constant.html)
 → const TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)
 

 A Material Design text theme with dark glyphs based on Segoe UI.
 

 
 blackRedwoodCity(https://api.flutter.dev/flutter/material/Typography/blackRedwoodCity-constant.html)
 → const TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)
 

 A Material Design text theme with dark glyphs based on San Francisco.
 

 
 dense2014(https://api.flutter.dev/flutter/material/Typography/dense2014-constant.html)
 → const TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)
 

 Defines text geometry for dense scripts, such as Chinese, Japanese
and Korean.
 

 
 dense2018(https://api.flutter.dev/flutter/material/Typography/dense2018-constant.html)
 → const TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)
 

 Defines text geometry for dense scripts, such as Chinese, Japanese
and Korean.
 

 
 dense2021(https://api.flutter.dev/flutter/material/Typography/dense2021-constant.html)
 → const TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)
 

 Defines text geometry for dense scripts, such as Chinese, Japanese
and Korean.
 

 
 englishLike2014(https://api.flutter.dev/flutter/material/Typography/englishLike2014-constant.html)
 → const TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)
 

 Defines text geometry for ScriptCategory.englishLike scripts, such as
English, French, Russian, etc.
 

 
 englishLike2018(https://api.flutter.dev/flutter/material/Typography/englishLike2018-constant.html)
 → const TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)
 

 Defines text geometry for ScriptCategory.englishLike scripts, such as
English, French, Russian, etc.
 

 
 englishLike2021(https://api.flutter.dev/flutter/material/Typography/englishLike2021-constant.html)
 → const TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)
 

 Defines text geometry for ScriptCategory.englishLike scripts, such as
English, French, Russian, etc.
 

 
 tall2014(https://api.flutter.dev/flutter/material/Typography/tall2014-constant.html)
 → const TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)
 

 Defines text geometry for tall scripts, such as Farsi, Hindi, and Thai.
 

 
 tall2018(https://api.flutter.dev/flutter/material/Typography/tall2018-constant.html)
 → const TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)
 

 Defines text geometry for tall scripts, such as Farsi, Hindi, and Thai.
 

 
 tall2021(https://api.flutter.dev/flutter/material/Typography/tall2021-constant.html)
 → const TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)
 

 Defines text geometry for tall scripts, such as Farsi, Hindi, and Thai.
 

 
 whiteCupertino(https://api.flutter.dev/flutter/material/Typography/whiteCupertino-constant.html)
 → const TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)
 

 A Material Design text theme with light glyphs based on San Francisco.
 

 
 whiteHelsinki(https://api.flutter.dev/flutter/material/Typography/whiteHelsinki-constant.html)
 → const TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)
 

 A Material Design text theme with light glyphs based on Roboto, with fallbacks of DejaVu Sans, Liberation Sans and Arial.
 

 
 whiteMountainView(https://api.flutter.dev/flutter/material/Typography/whiteMountainView-constant.html)
 → const TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)
 

 A Material Design text theme with light glyphs based on Roboto.
 

 
 whiteRedmond(https://api.flutter.dev/flutter/material/Typography/whiteRedmond-constant.html)
 → const TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)
 

 A Material Design text theme with light glyphs based on Segoe UI.
 

 
 whiteRedwoodCity(https://api.flutter.dev/flutter/material/Typography/whiteRedwoodCity-constant.html)
 → const TextTheme(https://api.flutter.dev/flutter/material/TextTheme-class.html)
 

 A Material Design text theme with light glyphs based on San Francisco.
