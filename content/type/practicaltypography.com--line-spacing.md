---
title: "Practical Typography · 行距"
source: https://practicaltypography.com/line-spacing.html
section: type
tag: "阅读排版"
fetched: 2026-10-20
status: full
id: type-20
publisher: "Practical Typography"
---

# Practical Typography · 行距

> 来源：[https://practicaltypography.com/line-spacing.html](https://practicaltypography.com/line-spacing.html)

---

line spacing120–145% of the point size

Line spac­ing is the ver­ti­cal dis­tance be­tween lines of text. Most writ­ers use ei­ther dou­ble-spaced lines or sin­gle-spaced lines—noth­ing in be­tween—be­cause those are the op­tions pre­sented by word processors.

These habits are ob­so­lete [type­writer habits](https://practicaltypography.com/typewriter-habits.html). Orig­i­nally, a type­writer’s platen could only move the pa­per ver­ti­cally in units of a sin­gle line. There­fore, line-spac­ing choices were lim­ited to one, two, or more lines at a time. Sin­gle-spaced type­writ­ten text is dense and hard to read. But dou­ble-spac­ing is still looser than optimal.

For most text, the op­ti­mal line spac­ing is be­tween 120% and 145% of the point size. Most word proces­sors, as well as CSS, let you de­fine line spac­ing as a mul­ti­ple. Or you can do the math—mul­ti­ply your point size by the per­cent­age. (The text in this para­graph has line spac­ing of 110%. It’s too tight.)

For most text, the optimal line spacing is between 120% and 145% of the point size. Most word processors, as well as CSS, let you define line spacing as a multiple. Or you can do the math—multiply your point size by the percentage. (The text in this paragraph has line spacing of 135%. It looks fine.)

For most text, the op­ti­mal line spac­ing is be­tween 120% and 145% of the point size. Most word proces­sors, as well as CSS, let you de­fine line spac­ing as a mul­ti­ple. Or you can do the math—mul­ti­ply your point size by the per­cent­age. (The text in this para­graph has line spac­ing of 170%. It’s too loose.)

Word proces­sors have a be­wil­der­ing num­ber of ways to set line spac­ing. Don’t be thrown off—it all comes back to the same thing.

How to set line spacing

WordRight-click in the text and se­lect Paragraph from the menu. Go to the menu un­der Line spacing. Exactly is best—en­ter a fixed mea­sure­ment. Single, 1.5 lines, and Double are equiv­a­lent to about 117%, 175%, and 233% line spac­ing, con­trary to what their names sug­gest. Don’t use these—they miss the tar­get zone of 120–145%. Multiple is also ac­cept­able—en­ter line spac­ing as a dec­i­mal. To get line spac­ing in the 120–145% range, use a Multiple value of 1.03–1.24. (Not 1.20–1.45—as noted above, Word uses pe­cu­liar line-spac­ing math.) Never use At least, be­cause that gives Word per­mis­sion to ad­just your line spac­ing unpredictably.

PagesView → Show Toolbar (or op­tion + ⌘ + t) → Format but­ton → Style pane → un­der Spacing, there’s a popup menu. Exactly is best—en­ter a fixed mea­sure­ment. You can also use the Lines op­tion, but like Word, it adds ex­tra space—about 17%. There­fore, to get line spac­ing in the 120–145% range, use a Lines value of 1.03–1.29. Avoid the other options.

CSSUse the `line-height` prop­erty, prefer­ably with­out units [(here’s why)](http://stackoverflow.com/a/20818206/1486915)

by the way

*   Re­call that dif­fer­ent fonts set at the same point size may not ap­pear the same size on the page. (See [point size](https://practicaltypography.com/point-size.html) for why.) A side ef­fect is that fonts that run small will need less line spac­ing, and vice versa.
    
*   Line spac­ing af­fects the length of a doc­u­ment more than point size. If you need to fit a doc­u­ment onto a cer­tain num­ber of pages, try ad­just­ing the line spac­ing first.
