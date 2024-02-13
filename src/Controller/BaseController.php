<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\String\Slugger\SluggerInterface;




use App\Form\ModifAccountType;
use App\Form\AddProduitType;



use App\Entity\User;
use App\Entity\Produit;





  
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

    #[Route('/fidelite', name: 'fidelite')]
    public function fidelite(): Response
    {
        return $this->render('base/fidelite.html.twig', [
        ]);
    }


    #[Route('modifAccount', name: 'modifAccount')]
    public function modifAccount(Request $request, EntityManagerInterface $entityManagerInterface): Response
    {
    $user = $this->getUser();

    $form = $this->createForm(ModifAccountType::class, $user);

    if ($request->isMethod('POST')) {
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManagerInterface->flush();

            $this->addFlash('notice', 'Modifications effectuées');
            return $this->redirectToRoute('account');
        } else {
            $this->addFlash('notice', 'Modifications non effectuées');
        }
    }

    return $this->render('base/modifAccount.html.twig', [
        'form' => $form->createView(),
    ]);
}

#[Route('/gestion', name: 'gestion')]
    public function gestion(): Response
    {
        return $this->render('base/gestion.html.twig', [
        ]);
    }

#[Route('/addProduit', name: 'addProduit')]
    public function addProduit(Request $request, SluggerInterface $slugger, EntityManagerInterface $entityManagerInterface): Response
    {
        $produit = new Produit();

        $form = $this->createForm(AddProduitType::class, $produit);

        if($request->isMethod('POST')){
            $form->handleRequest($request);
            if ($form->isSubmitted()&&$form->isValid()){


                //C'est pour enregistré les image dans le produit
                
                $img = $form->get('image')->getData();
                if($img){

                    $nomImage= pathinfo($img->getClientOriginalName(), PATHINFO_FILENAME);
                    $nomImage= $slugger->slug($nomImage);
                    $nomImage = $nomImage.'-'.uniqid().'.'.$img->guessExtension();
                    $produit->setImage($nomImage);
                       try{                 
                           $img->move($this->getParameter('image_directory'), $nomImage);
                           $this->addFlash('notice', 'Fichier envoyé');
                       }
                       catch(FileException $e){
                           $this->addFlash('notice', 'Erreur d\'envoi');
                       } 
                }


                $entityManagerInterface->persist($produit);
                $entityManagerInterface->flush();
                

            }

        }

        return $this->render('base/addProduit.html.twig', [
            'form' => $form->createView(),
        ]);
    }

}
