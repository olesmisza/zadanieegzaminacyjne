function policz(){
	var powierzchnia = document.getElementById("powierzchnia").value;
	var wynik = document.getElementById("wynik");
	var puszki = Math.ceil(powierzchnia/4);

	wynik.innerHTML = "Liczba jednolitrowych puszek farby potrzebnych do pomalowania wynosi: "+puszki;

}