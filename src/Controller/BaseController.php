<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

  
use Doctrine\ORM\EntityManagerInterface;



class BaseController extends AbstractController
{
    #[Route('/index', name: 'index')]
    public function index(): Response
    {
        return $this->render('base/index.html.twig', [
        ]);
    }

    #[Route('/cgv', name: 'cgv')]
    public function cgv(): Response
    {
        return $this->render('base/cgv.html.twig', [
        ]);
    }

    #[Route('/categorie', name: 'categorie')]
    public function categorie(): Response
    {
        return $this->render('base/categorie.html.twig', [
        ]);
    }
    #[Route('/mentionlegale', name: 'mentionlegale')]
    public function mentionlegale(): Response
    {
        return $this->render('base/mentionlegale.html.twig', [
        ]);
    }
    #[Route('/about', name: 'about')]
    public function about(): Response
    {
        return $this->render('base/about.html.twig', [
        ]);
    }

    #[Route('/account', name: 'account')]
    public function account(): Response
    {
        return $this->render('base/compte.html.twig', [
        ]);
    }

    #[Route('/test', name: 'test')]
    public function test(): Response
    {
        return $this->render('base/test.html.twig', [
        ]);
    }

    #[Route('/burger', name: 'burger')]
    public function burger(): Response
    {
        return $this->render('produit/burger.html.twig', [
        ]);
    }

    #[Route('/wrap', name: 'wrap')]
    public function wrap(): Response
    {
        return $this->render('produit/wrap.html.twig', [
        ]);
    }


    #[Route('/dessert', name: 'dessert')]
    public function dessert(): Response
    {
        return $this->render('produit/dessert.html.twig', [
        ]);
    }

    #[Route('/sandwich', name: 'sandwich')]
    public function sandwich(): Response
    {
        return $this->render('produit/sandwich.html.twig', [
        ]);
    }

    #[Route('/petiteFaim', name: 'petiteFaim')]
    public function petiteFaim(): Response
    {
        return $this->render('produit/petiteFaim.html.twig', [
        ]);
    }
}
