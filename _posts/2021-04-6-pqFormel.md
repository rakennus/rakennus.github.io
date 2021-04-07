---
title: "Lösen quadratischer Gleichungen mit der pq Formel"
layout: post
author: Rakennus
---

### Was ist die pq Formel?

Die pq Formel ist eine Formel zum berechnen der Nullstelle*n von gemischt quadratischen Gleichung. Das heißt einfach formuliert, dass man mit ihr den Punkt oder, die Punkte berechnet an denen eine Parabel in einem Koordinatensystem die X-Achse schneidet. Jedoch muss eine Parabel in einem Koordinatensystem die x-Achse nicht zwingend schneiden. In diesem Fall gibt die Formel keine reelle Lösung. Jedoch gehe ich im folgenden genauer darauf ein.
Die pq-Formel lautet:

$$x_{1|2} = -\dfrac{p}{2} \pm \sqrt{\left(\dfrac{p}{2}\right)^2-q}$$

### Wie wendet man die pq-Formel an?

Im folgenden ist die Normalform einer gemischt quadratischen Gleichung zu sehen:

$$x^1 + px + q = 0$$

Um nun die Gleichung zu lösen müssen p und q in die pq Formel eingesetzt werden.

### Zu beachten!

Hier ein Beispiel von einer gemischt quadratischen Gleichung auf die sich die pq-Formel anwenden lässt:

$$x^2 + 4x + 8 = 0$$

Es ist essentiell, dass die Gleichung ein \\(x^2\\) ein x mit einer Zahl, sowie eine weitere Zahl enthält. Folglich würden die folgenden quadratischen Gleichungen sich nicht in die pq Formel einsetzen lassen:

$$x^2 + 4x = 0$$

$$x^2 + 8 = 0$$

$$x^2 = 0$$

<!--Selten hat man eine gemischt quadratische Gleichung bei der das \\(x^2\\) allein steht. Oft hat man-->

### Beispiel:

$$x^2 + 4x - 10 = 0$$

In diesem Fall ist $$p = 4$$ und $$q = -10$$.

$$x_{1|2} = -\dfrac{4}{2} \pm \sqrt{\left(\dfrac{4}{2}\right)^2-(-10)}$$

Nun kann die Formel ausgerechnet werden. Dies wird im Folgenden anhand des Beispieles Schritt für Schritt vorgemacht und erklärt.

-Die Rechnung unter der Wurzel nennt sich Radikant und wird zuerst ausgerechnet. Dazu lösen wir die Klammern und rechnen die Brüche aus. Dabei ist sehr auf Vorzeichen zu achten, denn die \\(-(-10)\\) wird zu \\(10\\). Aus den \\(\left(\dfrac{4}{2}\right)^2\\) wird eine \\(4\\).

$$x_{1|2} = -\dfrac{4}{2} \pm \sqrt{4 + 10} = -\dfrac{4}{2} \pm \sqrt{14}$$

-Die Lösung der Wurzel berechne ich in diesem Fall mit einem Taschenrechner und runde ich auf zwei Nachkommastellen auf. Nun kann der übrig gebliebene Bruch ausgerechnet werden.

$$x_{1|2} = -\dfrac{4}{2} \pm 3,74 = -2 \pm 3,74$$

-Bevor wir nun den Rest ausrechnen, müssen wir noch eine Sache wissen. Wenn man das erste Mal die pq-Formel sieht wird einem aufgefallen sein, dass dort ein
\\(x_{1|2}\\)
steht und zwischen
\\(-\dfrac{p}{2}\\) und der Wurzel ein Plus und ein Minus übereinander stehen.

Das ist eine zusammengehörende Kurzschreibweise, denn die pq-Formel besteht eigentlich aus zwei Formeln. Eine für \\(x_1\\) und eine für \\(x_2\\). Das Plus über dem Minus bedeutet, dass einmal die Wurzel zu \\(-\dfrac{p}{2}\\) subtrahiert und einmal addiert wird. Die Zwei Ergebnisse sind dann \\(x_1\\) und \\(x_2\\). Daraus folgt:

$$x_1 = -\dfrac{p}{2} + \sqrt{\left(\dfrac{p}{2}\right)^2-q}$$

$$x_2 = -\dfrac{p}{2} - \sqrt{\left(\dfrac{p}{2}\right)^2-q}$$

Genau das machen wir jetzt auch mit unserem Beispiel und machen da weiter wo wir aufgehört haben. Der Rest ist nur noch einfache addition und subtraktion:

$$x_1 = -2 + 3,74 = 1,74$$

$$x_2 = -2 - 3,74 = -5,74$$

Das Ergebnis ist \\(x_1 = 1,74\\) und \\(x_2 = -5,74\\).