// Importa el servicio APIServiceService y el decorador Component desde los módulos de Angular.
import { PokeapiService } from './../Services/apiservice.service';
import { Component } from '@angular/core';

  // Declara una variable local para almacenar el nombre desl Pokémon.

// Define el componente HomePage con su selector, plantilla y estilos.
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pokemon: any;
  pokemon1: any;
  pokemon2: any;
  pokemon3: any;
  // Constructor del componente que recibe una instancia del servicio APIServiceService.
  constructor(private PokeapiService: PokeapiService) {}
 Id:number=1;
 Name:string="";
  // Método para obtener datos de un Pokémon dado su ID.
  getPokemonDataID(id: number) {

    try {
      
      // Llama al método getPokemon del servicio y se suscribe al observable.
      this.PokeapiService.getPokemonID(id).subscribe((response => {
        // Dentro de la función de éxito de la suscripción:
        // Asigna el nombre del Pokémon a la variable local 'pokemon'.
        this.pokemon = response.sprites.front_default;// Imprime el nombre del Pokémon en la consola.
        this.pokemon1 = response.name;
        console.log(this.pokemon);
      
      }));
    } catch (error) {
      // Captura cualquier error que pueda ocurrir durante la suscripción y lo imprime en la consola.
      console.log(error);
    }
  }
  getPokemonDataName(Name: string) {

    try {
      
      // Llama al método getPokemon del servicio y se suscribe al observable.
      this.PokeapiService.getPokemonName(Name).subscribe((response => {
        // Dentro de la función de éxito de la suscripción:
        // Asigna el nombre del Pokémon a la variable local 'pokemon'.
        this.pokemon2 = response.sprites.front_default;// Imprime el nombre del Pokémon en la consola.
        this.pokemon3 = response.id;
        console.log(this.pokemon);
      
      }));
    } catch (error) {
      // Captura cualquier error que pueda ocurrir durante la suscripción y lo imprime en la consola.
      console.log(error);
    }
  }
}
