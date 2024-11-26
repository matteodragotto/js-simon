# JS - Programmazione Asincrona
----
### Esercizio:

- Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 10 secondi.

- Dopo 10 secondi i numeri scompaiono e appaiono invece 5 input in cui l’utente deve inserire i numeri che ha visto precedentemente, nell’ordine che preferisce.
- Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

**NOTA**: non è importante l’ordine con cui l’utente inserisce i numeri, basta che ne indovini il più possibile.

##### BONUS
- Inseriamo la validazione: se l’utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
- Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.
- I numeri random generati devono essere univoci

---

### Esecuzione:

1. In javascript creo una funzione per la creazione di numeri casuali da 1 a 50.
2. Con questa funzione creo 5 numeri casuali unici (probabilmente tramite il set object?) e li inserisco in un array.
3. Creo un conto alla rovescia tramite la programmazione asincrona (setInterval?)
3. Al load della pagina appariranno i 5 numeri generati casualmente in pagina e il conto alla rovescia quindi stampo il mio array e l'interval in pagina
4. Alla fine del conto alla rovescia questa prima parte scompare e appare il form dove inserire i numeri da ricordare (il termine del conto alla rovescia determina la rimozione/aggiunta di un classe hide per rimuovere il primo elemento)