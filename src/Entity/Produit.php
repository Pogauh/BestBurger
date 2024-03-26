<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\ProduitRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
//-----------------------------------------------------------------
use ApiPlatform\Metadata\Delete;

#[ApiResource( 
    operations:[new Get(normalizationContext:['groups'=>'produit:item']),
            new GetCollection(normalizationContext:['groups'=>'produit:list']),
            new Delete(),
        ]
)]

#[ApiFilter(OrderFilter::class, properties:['nom' => 'ASC'])]

#[ORM\Entity(repositoryClass: ProduitRepository::class)]
class Produit
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[groups(['produit:list','produit:item'])]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'produits')]
    #[groups(['produit:list','produit:item'])]
    private ?Categorie $categorie = null;

    #[ORM\Column(length: 255)]
    #[groups(['produit:list','produit:item','categorie:list','categorie:item'])]
    private ?string $nom = null;

    #[ORM\Column(length: 255)]
    #[groups(['produit:list','produit:item'])]
    private ?string $description = null;

    #[ORM\Column]
    #[groups(['produit:list','produit:item'])]

    private ?float $prixSeul = null;

    #[ORM\Column]
    #[groups(['produit:list','produit:item'])]

    private ?float $prixMenu = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[groups(['produit:list','produit:item'])]

    private ?string $image = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCategorie(): ?Categorie
    {
        return $this->categorie;
    }

    public function setCategorie(?Categorie $categorie): static
    {
        $this->categorie = $categorie;

        return $this;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): static
    {
        $this->nom = $nom;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getPrixSeul(): ?float
    {
        return $this->prixSeul;
    }

    public function setPrixSeul(float $prixSeul): static
    {
        $this->prixSeul = $prixSeul;

        return $this;
    }

    public function getPrixMenu(): ?float
    {
        return $this->prixMenu;
    }

    public function setPrixMenu(float $prixMenu): static
    {
        $this->prixMenu = $prixMenu;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): static
    {
        $this->image = $image;

        return $this;
    }
}
