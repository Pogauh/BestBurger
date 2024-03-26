<?php

namespace App\Form;

use App\Entity\Produit;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType as DoctrineEntityType;
use App\Entity\Categorie;





class AddProduitType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
        ->add('nom', TextType::class, ['attr' => ['class'=> 'form-control'], 'label_attr' => ['class'=> 'fw-bold']])
        ->add('Description', TextareaType::class, ['attr' => ['class'=> 'form-control', 'rows'=>'7', 'cols' => '7'],
        'label_attr' => ['class'=> 'fw-bold']])
        ->add('prixSeul', TextType::class, ['attr' => ['class'=> 'form-control'], 'label_attr' => ['class'=> 'fw-bold']])
        ->add('prixMenu', TextType::class, ['attr' => ['class'=> 'form-control'], 'label_attr' => ['class'=> 'fw-bold']])
        ->add('categorie', DoctrineEntityType::class, [
            'class' => Categorie::class,
            'choice_label' => 'name',
            'attr' => ['class'=> 'form-control'],
            'label_attr' => ['class'=> 'fw-bold'],
        ])
        ->add('image', FileType::class, array('label' => 'Image à télécharger','mapped'=>false))
        ->add('envoyer', SubmitType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Produit::class,
        ]);
    }
}
