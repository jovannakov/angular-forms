import { Injectable } from '@angular/core';
import { User } from './User';
import { Movie } from './Movie';

@Injectable({
    providedIn: "root"
})
export class Transfer{
    user:User;
    public setUser(user:User){
        this.user = user;
    }
    public getUser(){
        return this.user;
    }

    public getMovies(){
        return this.user.movies;
    }
    public addMovie(movie:Movie){
        this.user.movies.push(movie);
    }
    public setMovies(movies:any[]){
        this.user.movies = movies;
    }

    public removeMovie(movie:Movie){
        this.user.movies = this.user.movies.filter((m) => {
            if(m.Name != movie.Name) return m;
        });
    }
}