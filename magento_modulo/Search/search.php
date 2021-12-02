<?php $results = $block->getResults() ?>
<?php $params = $block->getParams() ?>
<?php $facets = (is_array($results) && array_key_exists('facets', $results['placements'][0])) ? $results['placements'][0]['facets'] : [] ?>
<?php $numFound = (is_array($results) && $results['placements'][0]['numFound']) ? $results['placements'][0]['numFound'] : '0' ?>

<!-- filters mobile -->
<?php if (is_array($facets) && count($facets)) : ?>
  <section>
    <div id="mobileFilter" class="mobile-filter pullDown">
          <div class="title-filter-mb">
            <div>Filtrar</div>
            <div><p class="close-mb" onclick="closeFilter();">&#x2715</p></div>
          </div>
      <div class="wrap-filter-mb">

        <?php foreach ($facets as $keyFacet => $facet) : ?>

          <?php if (in_array($facet['facet'], ['brand', 'categoryName'])) : ?>
            <?php continue ?>
          <?php endif ?>

          <div class="wrap-filter-mb">
            <div class="item-filter-mb">
              <h3>Categoría</h3>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
                <label for="vehicle1"> decoración</label><br>
                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
                <label for="vehicle2"> recámara</label><br>
                <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
                <label for="vehicle3"> cocina</label><br><br>
            </div>
            <hr>
          </div>
          
        <?php endforeach ?>
    </div>
  </section>
<?php endif ?>

<!-- bloque -->
<section id="bloqueMagento">
  <div class="wrap-bloque-bb">
    <p><?php echo $numFound ?> resultados para</p>
    <h2>"<?php echo $block->getNombreDeBusqueda() ?>"</h2>
  </div>
</section>

<div id="backToUp"></div>

<?php if ($numFound) : ?>
<!-- PLP main -->
<main id="plpBb">

  <!-- total -->
  <section>
    <div class="wrap-total">
      <p class="item-total">Mostrando <span id="numtoshow"> </span>  de  <span id="totalProducts"><?php echo $numFound ?></span> productos</p>
      <p class="just-mobile">
        <img src="https://www.bedbathandbeyond.com.mx/media/wysiwyg/home/filtrar.png?rand=1628471862" alt="filer" onclick="enableFilter()" />
      </p>
    </div>
  </section>

  <div class="line-medium"></div>

  <?php if (is_array($facets) && count($facets)) : ?>
    <!-- filter -->
    <section id="filterPlp">
      <div class="wrap-filter">

      <?php $facetsSelected = [] ?>

        <?php foreach ($facets as $keyFacet => $facet) : ?>

          <?php if (in_array($facet['facet'], ['brand', 'categoryName'])) : ?>
            <?php continue ?>
          <?php endif ?>

          <div class="item-filter">
            <div id="facet_<?php echo $keyFacet ?>" class="checkbox-dropdown" onClick="dropDownBB('facet_<?php echo $keyFacet ?>')">
              <?php echo $facet['facet'] ?>
              <ul class="checkbox-dropdown-list">

                <?php foreach ($facet['values'] as $keyValue => $value) : ?>
                  <?if (!empty($value['value'])) : ?>

                    <?php $checked = (array_key_exists($facet['facet'], $params) && in_array($value['value'], explode('|', $params[$facet['facet']]))) ? 'checked="checked"' : null ?>
                    <li onclick="triggerFilter('<?php echo $value['value'] ?>','<?php echo $facet['facet'] ?>')">
                      <input type="checkbox" id="<?php echo $value['value'] ?>" <?php echo $checked ?> />
                      <label for="facet_<?php echo $keyFacet ?>_value_<?php echo $keyValue?>" onclick="searchByFacet('<?php echo $facet['facet']?>', '<?php echo $value['value'] ?>')"><?php echo $value['value'] ?> <span class="total-number">(<?php echo $value['count'] ?>)</span></label>
                    </li>

                    <?php if ($checked) : ?>
                      <?php $facetsSelected[] =['facet' => $facet['facet'], 'value' => $value['value']] ?>
                    <?php endif ?>

                  <?php endif ?>
                <?php endforeach ?>
              </ul>
            </div>
          </div>

          <?php if (count($facetsSelected)) : ?>
            <script>
              window.onload = () => {
                <?php foreach ($facetsSelected as $facetSelected) : ?>
                  triggerFilter('<?php echo $facetSelected['value'] ?>','<?php echo $facetSelected['facet'] ?>');
                <?php endforeach ?>
              }
            </script>
          <?php endif ?>

        <?php endforeach ?>

      </div>
    </section>

    <!-- tabs filter -->
    <section id="tabFilter">
      <div id="availableFilter" class="wrap-tab-filter">
        <div id="clearFilter" class="tab-filter clear-filter" onclick="cleanFilter()">limpiar filtros</div>
      </div>
    </section>

  <?php endif ?>

  <!-- grid -->
  <section id="gridPLP">
    <div class="wrap-grid-plp">
      <?php $products = $results['placements'][0]['docs'] ?>
      <?php if (count($products)) : ?>

        <?php foreach ($products as $product) : ?>
          <!-- item grid-->
          <div class="item-grid-bb">
            <a href="<?php echo str_replace('&lang=es-MX&', '&lang=es-MX&redirect=true&', $product['clickUrl'])?>" target="_self">
              <div class="item-img-bb img-container">
                <img src="<?php echo $product['imageId'] ?>" alt="" />
                <div class="hidden-child">
                  <?php if (array_key_exists('image_two_url', $product)) : ?>
                    <img src="<?php echo $product['image_two_url'] ?>" alt="" />
                  <?php endif ?>
                </div>

                <?php if (array_key_exists('imageCategory', $product)) : ?>
                  <div class="wrap-cat-icon">
                    <img src="<?php echo $product['imageCategory'] ?>" alt="" />
                  </div>
                <?php endif ?>
              </div>

              <div class="item-price-bb">
                <?php if (array_key_exists('special_price', $product)) : ?>
                  <p class="pricestandar disccount"><?php echo $block->formatPrice($product['special_price']) ?></p>
                  <p class="nonprice"><?php echo $block->formatPrice($product['priceCents']) ?></p>
                <?php else: ?>
                  <p class="pricestandar"><?php echo $block->formatPrice($product['priceCents']) ?></p>
                <?php endif ?>
              </div>

              <p class="item-des-bb"><?php echo $product['name'] ?></p>

              <form data-role="tocart-form" action="<?php echo $block->getAddToCartUrl($product['id']) ?>" method="post">
                <?php echo $block->getBlockHtml('formkey')?>
                  <button type="submit">agregar a carrito</button>
              </form>
            </a>
          </div>
        <?php endforeach ?>
      <?php endif ?>
    </div>
    <div id="loadingSearch" class="loading">&#8230;</div>
  </section>

  <!-- Show More -->
  <div id="showMore" onclick="showMoreResults()">
        <p>Mostrar más resultados</p>
  </div>

  <!-- Not Results -->
  <div id="noResults">
    <h4></h4>
  </div>

  <!-- total -->
  <div class="line-medium"></div>
  <section>
    <div class="wrap-total">
      <p>Mostrando <span id="numtoshowb"> </span>  de  <?php echo $numFound ?> productos</p>
    </div>
  </section>

  <!-- Go Up -->
  <a href="#backToUp">
    <div id="arrowUp">
      <p>&#8593;</p>
    </div>
  </a>

</main>
<?php else : ?>

  <!-- Not Results -->
  <section>
    <div id="noResults">

    <div class="wrap-recommendation">
          <div class="item-recommendation">
            <div class="explore-brands">
              <a href="https://www.bedbathandbeyond.com.mx/marcas.html" target="_self">
                <div class="text-recommendation">Explora nuestras marcas</div>
              </a>
            </div>
          </div>
          <div class="item-recommendation">
            <div class="explore-brands">
                <div class="text-recommendationb">Gracias por tu preferencia</div>
            </div>
          </div>
        </div>

        <h2>categorías</h2>
        <div class="wrap-categories">

            <div class="cat-options">
              <a href="https://www.bedbathandbeyond.com.mx/productos/recamara.html" target="_self">
                <div class="item-options">
                  <div>
                    <p class="sub-options">recámara</p>
                  </div>
                  <div>
                    <img src="https://s7d1.scene7.com/is/image/BedBathandBeyond/7135623279387m?$imagePLP$&hei=700&wid=700" alt="categorias BedBathandBeyond"/>
                  </div>
                </div>
              </a>
            </div>


            <div class="cat-options">
              <a href="https://www.bedbathandbeyond.com.mx/productos/bano.html" target="_self">
                <div class="item-options">
                  <div>
                    <p class="sub-options">baño</p>
                  </div>
                  <div>
                    <img src="https://www.bedbathandbeyond.com.mx/media/wysiwyg/home/FEO_BBB_Homepage_10.31_C02.jpeg?rand=1626205208" alt="categorias BedBathandBeyond"/>
                  </div>
                </div>
              </a>
            </div>



              <div class="cat-options">
                <a href="https://www.bedbathandbeyond.com.mx/productos/categoria-cocinas.html" target="_self">
                  <div class="item-options">
                    <div>
                      <p class="sub-options">cocina</p>
                    </div>
                    <div>
                      <img src="https://www.bedbathandbeyond.com.mx/media/wysiwyg/home-2/kitchen10.jpg?rand=1606782832" alt="categorias BedBathandBeyond"/>
                    </div>
                  </div>
                </a>
              </div>



                <div class="cat-options">
                  <a href="https://www.bedbathandbeyond.com.mx/productos/decoracion.html" target="_self">
                    <div class="item-options">
                      <div>
                        <p class="sub-options">decoración</p>
                      </div>
                      <div>
                        <img src="https://s7d1.scene7.com/is/image/BedBathandBeyond/2020-09-29-05-15_444800332686" alt="categorias BedBathandBeyond"/>
                      </div>
                    </div>
                  </a>
                </div>

                <div class="cat-options">
                  <a href="https://www.bedbathandbeyond.com.mx/productos/cuidado-personal.html" target="_self">
                    <div class="item-options">
                      <div>
                        <p class="sub-options">cuidado personal</p>
                      </div>
                      <div>
                        <img src="https://www.bedbathandbeyond.com.mx/media/wysiwyg/home-2/health-_-beauty10.jpg?rand=1606782832" alt="categorias BedBathandBeyond"/>
                      </div>
                    </div>
                  </a>
                </div>

        </div>
    </div>
  </section>
<?php endif ?>