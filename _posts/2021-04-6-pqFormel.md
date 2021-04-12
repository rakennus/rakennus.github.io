---
title: "Lösen quadratischer Gleichungen mit der pq Formel"
layout: post
author: Rakennus
---

### Was ist die pq Formel?

Die pq-Formel ist eine Formel zum berechnen der Nullstelle von gemischt quadratischen Gleichung. Das heißt einfach formuliert, dass man mit ihr den Punkt oder die Punkte berechnet, an denen eine Parabel in einem Koordinatensystem die x-Achse schneidet. Jedoch muss eine Parabel in einem Koordinatensystem die x-Achse nicht zwingend schneiden. In diesem Fall gibt die Formel keine reelle Lösung. Jedoch gehe ich im Folgenden genauer darauf ein.
Die pq-Formel lautet:

$$x_{1|2} = -\dfrac{p}{2} \pm \sqrt{\left(\dfrac{p}{2}\right)^2-q}$$

### Wie wendet man die pq-Formel an?

Im Folgenden ist die Normalform einer gemischt quadratischen Gleichung zu sehen:

$$ax^2 + px + q = 0$$

Um nun die Gleichung zu lösen, müssen p und q aus der gemischt quadratischen Gleichung in die pq-Formel eingesetzt werden.

### Zu beachten!

Hier ein Beispiel von einer gemischt quadratischen Gleichung, auf die sich die pq-Formel anwenden lässt:

$$x^2 + 4x + 8 = 0$$

Es ist essenziell, dass die Gleichung ein \\(x^2\\) ein x mit einer Zahl sowie eine weitere Zahl enthält. Folglich würden die folgenden quadratischen Gleichungen sich nicht in die pq-Formel einsetzen lassen:

$$x^2 + 4x = 0$$

$$x^2 + 8 = 0$$

$$x^2 = 0$$

Es gibt noch eine weitere Form der gemischt quadratischen Gleichung, auf die sich die pq-Formel nicht ohne Weiteres anwenden lässt. Nämlich wenn vor dem \\(x^2\\) eine Zahl steht. Also beispielsweise: \\(4x^2 + 16x + 32 = 0\\)
wenn man die Gleichung jedoch durch die Zahl vor dem x teilt, ist die pq-Formel wieder anwendbar.

$$4x^2 + 16x + 32 = 0 | :4$$

$$=x^2 + 4x + 8 = 0$$


### Beispiel:

Im Folgendem wird anhand eines Beispieles vorgeführt, wie man mit der pq-Formel eine gemischt quadratischen Gleichung löst.

$$x^2 + 4x - 10 = 0$$

In diesem Fall ist $$p = 4$$ und $$q = -10$$.

$$x_{1|2} = -\dfrac{4}{2} \pm \sqrt{\left(\dfrac{4}{2}\right)^2-(-10)}$$

Nach dem Einsetzen von p und q in die pq-Formel kann diese ausgerechnet werden. Dies wird im Folgenden Schritt für Schritt vorgemacht und erklärt.

- Die Rechnung unter der Wurzel nennt sich Radikand und wird zuerst ausgerechnet. Dazu lösen wir alle Klammern und rechnen den Bruch aus. Dabei wird aus den \\((\dfrac{4}{2})^2\\) wird eine \\(4\\). Es ist sehr auf Vorzeichen zu achten, denn in diesem Fall wird die \\(-(-10)\\) zu einer \\(10\\).

$$x_{1|2} = -\dfrac{4}{2} \pm \sqrt{4 + 10} = -\dfrac{4}{2} \pm \sqrt{14}$$

- Die Lösung der Wurzel berechne ich in diesem Fall mit einem Taschenrechner, wobei ich auf zwei Nachkommastellen auf runde. Nun kann der übrig gebliebene Bruch ausgerechnet werden.

$$x_{1|2} = -\dfrac{4}{2} \pm 3,74 = -2 \pm 3,74$$

- Bevor wir nun den Rest ausrechnen, müssen wir noch eine Sache wissen. Wenn man das erste Mal die pq-Formel sieht, wird einem aufgefallen sein, dass dort ein $$x_{1|2}$$ steht und zwischen.
\\(-\dfrac{p}{2}\\) und der Wurzel ein Plus und ein Minus übereinander stehen.

Das ist eine zusammengehörende Kurzschreibweise, denn die pq-Formel besteht eigentlich aus zwei Formeln. Eine für \\(x_1\\) und eine für \\(x_2\\). Das Plus über dem Minus bedeutet, dass einmal die Wurzel zu \\(-\dfrac{p}{2}\\) subtrahiert und einmal addiert wird. Die Zwei Ergebnisse sind dann \\(x_1\\) und \\(x_2\\). Daraus folgt:

$$x_1 = -\dfrac{p}{2} + \sqrt{\left(\dfrac{p}{2}\right)^2-q}$$

$$x_2 = -\dfrac{p}{2} - \sqrt{\left(\dfrac{p}{2}\right)^2-q}$$

Genau das machen wir jetzt auch mit unserem Beispiel und machen da weiter, wo wir aufgehört haben. Der Rest ist nur noch einfache Addition und Subtraktion:

$$x_1 = -2 + 3,74 = 1,74$$

$$x_2 = -2 - 3,74 = -5,74$$

Das Ergebnis ist \\(x_1 = 1,74\\) und \\(x_2 = -5,74\\).

### praktische Anwendung der pq-Formel

Die pq-Formel eignet sich besonders für Computerprogrammen, in denen quadratischen Gleichung gelöst werden müssen. Sie lässt sich nämlich in die meisten Computersprachen übersetzen. Als Beispiel habe ich einmal so einfach wie möglich die pq-Formel in die Web-Programmiersprache Javascript übersetzt:

<script src="https://gist.github.com/rakennus/0c2d5395ca1caaaf0993290271c02864.js"></script>

Der Code beinhaltet eine Funktion namens pqFormel mit den Parametern p und q. Wenn man die Funktion mit zwei Zahlen als Parametern ausführt, nämlich die, die anstelle von p und q in einer gemischt quadratischen Gleichung stehen, bekommt man ein Objekt zurück. Das Objekt heißt result und beinhaltet zwei Variablen namens x1 und x2. Sie sind das Ergebnis der gemischt quadratischen Gleichung, die man als Quelle für die Parameter p und q verwendet hat.

Ich habe zu dieser Javascript Funktion eine grafische Schnittstelle programmiert, mit der man nur noch eine abgebildete quadratischen Gleichung um die Werte p und q vervollständigen muss und auf Knopfdruck das Ergebnis der Gleichung bekommt.

<div class="programBox">
<div id="pqFormelRechner">
    <div style="margin-bottom: 16px;" id="pqFormel">
        <p>x² + </p>
        <input class="mathInput" id="p" type="text" placeholder="p">
        <p>x + </p>
        <input class="mathInput" id="q" type="text" placeholder="q">
        <p> = 0</p>
    </div>
    <button onclick="rechnung()">Gleichung lösen</button>
    <div style="margin-top: 16px;" id="mathResult">
        <div><p style="display: inline;">x1: </p><p  style="display: inline;" id="x1"></p></div>
        <div><p style="display: inline;">x2: </p><p style="display: inline;" id="x2"></p></div>
    </div>
</div>
</div>

<script>
function pqFormel(p, q){
  return this.result = {
    x1: -p / 2 + Math.sqrt(Math.pow(p / 2, 2) - q),
    x2: -p / 2 - Math.sqrt(Math.pow(p / 2, 2) - q)
  }
}

function rechnung() {
  document.getElementById("x1").innerHTML = pqFormel(document.getElementById("p").value, document.getElementById("q").value).x1
  document.getElementById("x2").innerHTML = pqFormel(document.getElementById("p").value, document.getElementById("q").value).x2
}
</script>