package ejercicio9;

import java.util.HashMap;
import java.util.Scanner;


public class Diccionario {

	public static void main(String[] args) {
		

		HashMap<String, String> diccionario = new HashMap<String, String>();
		diccionario.put("edad", "age");
		diccionario.put("aire", "air");
		diccionario.put("back", "atrás");
		diccionario.put("hola", "hello");
		diccionario.put("edificio", "building");
		diccionario.put("perro", "dog");
		diccionario.put("gato", "cat");
		diccionario.put("iglesia", "church");
		diccionario.put("agua", "water");
		diccionario.put("vino", "wine");
		diccionario.put("libro", "book");
		diccionario.put("mesa", "table");
		diccionario.put("silla", "chair");
		diccionario.put("casa", "house");
		diccionario.put("ojo", "eye");
		diccionario.put("reloj", "clock");
		diccionario.put("luna", "moon");
		diccionario.put("sol", "sun");
		diccionario.put("juego", "game");
		diccionario.put("cielo", "sky");
		
		Scanner sc = new Scanner(System.in);
		System.out.print("Ingrese una palabra en español: ");
		String eng = sc.nextLine();
		String traduccion = diccionario.get(eng);

		
		if (traduccion != null) {
		    System.out.println("Traducción: " + traduccion);
		} else {
		    System.out.println("Lo siento, la palabra no está en el diccionario.");
		}
		sc.close();

	}

}






