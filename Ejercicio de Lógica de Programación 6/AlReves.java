package ejercicio6;

import java.util.Scanner;

public class AlReves {

	public static void main(String[] args) {
		Scanner tex=new Scanner (System.in);
		String palabra;
		String invert = " ";
		
		System.out.print(("Por favor ingrese una palabra"));
		palabra = tex.nextLine();
		
		for (int contador = palabra.length()-1; contador >= 0; contador--) {
			
			invert = invert + palabra.charAt(contador);
		}
		
		System.out.println(invert);
		
	}

}
