import '../../styles/sections/opk-shop-the-look.scss';

const SELECTORS = {
    section: '.js-shop-the-look',    
    wrap: '.js-shop-the-look-wrap',
    cart: '.Cart-Drawer',    
    btnShowCart: '.js-show-cart-drawer',    
}

const ATTRIBUTES = {
    dots: 'data-dots-index',    
    item: 'data-item-index'    
}

const CLASSNAME = {
    activeState: 'shop_the_look__products_item--active',
    activeStateCart: 'show'
}

const handleActiveItem = () => {
    const $sections = document.querySelectorAll(SELECTORS.section);
    if (!$sections.length) return;    

    $sections.forEach(($section) => {        
        const $wrap = $section.querySelector(SELECTORS.wrap);
        const $dots = $wrap.querySelectorAll(`[${ATTRIBUTES.dots}]`);
        const $btnsShowCart = $section.querySelectorAll(SELECTORS.btnShowCart);
        const $cart = document.querySelector(SELECTORS.cart);

        if ($cart) {
            $btnsShowCart.forEach(($btnShowCart) => {
                $btnShowCart.addEventListener('click', (e) => {
                    // e.preventDefault();

                    // setTimeout(() => {
                    //     $cart.classList.add('show');
                    //     document.querySelector('body').classList.add('show_overlay');
                    // });                    
                })
            })
        }
        

        const handleActiveClass = (dot) => {
            if (!dot.getAttribute(ATTRIBUTES.dots)) return;            
            const $items = $section.querySelectorAll(`[${ATTRIBUTES.item}]`);

            $items.forEach(($item) => {
                const itemIndex = $item.getAttribute(ATTRIBUTES.item);
                const dotIndex = dot.getAttribute(ATTRIBUTES.dots);

                if (itemIndex == dotIndex) {
                    $item.classList.add(CLASSNAME.activeState);
                } else {
                    $item.classList.remove(CLASSNAME.activeState);
                }

            })
        }

        $wrap.addEventListener('mouseover', (e) => {            
            handleActiveClass(e.target);
        });

        $dots.forEach(($dot) => {
            $dot.addEventListener('mouseleave', () => {
                const $items = $section.querySelectorAll(`[${ATTRIBUTES.item}]`);
    
                $items.forEach(($item) => {
                    $item.classList.remove(CLASSNAME.activeState);
                })
            });
        })
        
    })

    
}

handleActiveItem();