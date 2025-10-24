"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Calendar, Coffee, Flame, Globe, Heart, MapPin, MessageCircle, Star, TrendingUp, Users } from "lucide-react";

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Menu", id: "products" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="BrewCafe"
          button={{
            text: "Order Now",
            href: "https://order.brewcafe.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Fresh Coffee, Perfect Moments"
          description="Experience the finest artisanal coffee crafted with passion and served with warmth in our cozy neighborhood coffee shop."
          tag="Premium Coffee"
          tagIcon={Coffee}
          buttons={[
            { text: "View Menu", href: "products" },
            { text: "Visit Us", href: "contact" }
          ]}
          imageSrc="https://images.pexels.com/photos/1921168/pexels-photo-1921168.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern coffee shop interior with warm lighting and comfortable seating"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Our Coffee Story"
          description="Founded with a passion for exceptional coffee, we source the finest beans and craft each cup with care. Our mission is to create a welcoming space where community and quality coffee come together."
          tag="About Us"
          tagIcon={Heart}
          bulletPoints={[
            {
              title: "Premium Beans",
              description: "Sourced directly from sustainable farms worldwide",
              icon: Coffee
            },
            {
              title: "Expert Roasting",
              description: "Small-batch roasting for optimal flavor profiles",
              icon: Flame
            },
            {
              title: "Community Focus",
              description: "A welcoming space for neighbors and coffee lovers",
              icon: Users
            }
          ]}
          imageSrc="https://images.pexels.com/photos/7125616/pexels-photo-7125616.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Coffee beans in the roasting process"
          imagePosition="right"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="What Makes Us Special"
          description="Discover the unique elements that set our coffee experience apart"
          tag="Our Features"
          tagIcon={Star}
          features={[
            {
              title: "Artisan Coffee",
              description: "Every cup is crafted by skilled baristas using premium equipment and techniques",
              icon: Coffee
            },
            {
              title: "Fresh Roasted Daily",
              description: "Our beans are roasted in-house daily to ensure maximum freshness and flavor",
              icon: Flame
            },
            {
              title: "Cozy Atmosphere",
              description: "Relax in our warm, inviting space perfect for work, meetings, or casual conversations",
              icon: Star
            },
            {
              title: "Local Community",
              description: "We're proud to be a gathering place that brings our neighborhood together",
              icon: Heart
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Our Coffee Menu"
          description="Discover our signature drinks made with love and premium ingredients"
          tag="Menu"
          tagIcon={Coffee}
          products={[
            {
              id: "1",
              name: "Classic Espresso",
              price: "$3.50",
              imageSrc: "https://images.pexels.com/photos/16613916/pexels-photo-16613916.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Classic espresso shot in white cup",
              onProductClick: () => console.log('View espresso details')
            },
            {
              id: "2",
              name: "Cappuccino",
              price: "$4.25",
              imageSrc: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Cappuccino with beautiful foam art",
              onProductClick: () => console.log('View cappuccino details')
            },
            {
              id: "3",
              name: "Signature Latte",
              price: "$4.75",
              imageSrc: "https://images.pexels.com/photos/2288844/pexels-photo-2288844.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Latte with intricate foam art design",
              onProductClick: () => console.log('View latte details')
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Our Coffee Journey"
          description="Numbers that tell the story of our passion and community impact"
          tag="By the Numbers"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "500",
              title: "cups daily",
              description: "Freshly brewed coffee served to our community",
              icon: Coffee
            },
            {
              id: "2",
              value: "3",
              title: "years",
              description: "Serving the neighborhood with passion",
              icon: Calendar
            },
            {
              id: "3",
              value: "15",
              title: "coffee origins",
              description: "Premium beans from around the world",
              icon: Globe
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Team"
          description="The passionate people behind your perfect cup of coffee"
          tag="Our Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Maria Rodriguez",
              role: "Head Barista",
              imageSrc: "https://images.pexels.com/photos/15444413/pexels-photo-15444413.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Maria Rodriguez, Head Barista"
            },
            {
              id: "2",
              name: "James Mitchell",
              role: "Cafe Manager",
              imageSrc: "https://images.pexels.com/photos/3770093/pexels-photo-3770093.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of James Mitchell, Cafe Manager"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="Hear from the coffee lovers who make our community special"
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Local Business Owner",
              testimonial: "The best coffee in town! The atmosphere is perfect for morning meetings, and the baristas always remember my order. It's become my second office.",
              imageSrc: "https://images.pexels.com/photos/3801426/pexels-photo-3801426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Writer",
              testimonial: "I've found my creative sanctuary here. The coffee is exceptional, the wifi is reliable, and the cozy atmosphere helps me focus on my writing.",
              imageSrc: "https://images.pexels.com/photos/4063590/pexels-photo-4063590.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen"
            },
            {
              id: "3",
              name: "Emily Davis",
              role: "Marketing Director",
              testimonial: "The quality and consistency are unmatched. Whether it's a quick espresso or a leisurely latte, every visit exceeds my expectations.",
              imageSrc: "https://images.pexels.com/photos/712436/pexels-photo-712436.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emily Davis"
            },
            {
              id: "4",
              name: "David Park",
              role: "Coffee Enthusiast",
              testimonial: "As someone who's passionate about coffee, I appreciate the attention to detail here. From bean selection to brewing techniques, everything is top-notch.",
              imageSrc: "https://images.pexels.com/photos/3801426/pexels-photo-3801426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Park"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about our coffee and cafe"
          textPosition="left"
          faqs={[
            {
              id: "1",
              title: "What are your opening hours?",
              content: "We're open Monday through Friday from 6:30 AM to 8:00 PM, and weekends from 7:00 AM to 9:00 PM. We're here to serve you throughout the day!"
            },
            {
              id: "2",
              title: "Do you offer dairy-free alternatives?",
              content: "Absolutely! We have oat milk, almond milk, soy milk, and coconut milk available for all our drinks at no extra charge."
            },
            {
              id: "3",
              title: "Can I work here with my laptop?",
              content: "Yes! We welcome remote workers and students. We have free Wi-Fi, plenty of outlets, and comfortable seating areas perfect for productivity."
            },
            {
              id: "4",
              title: "Do you sell whole bean coffee?",
              content: "Yes, we sell our freshly roasted beans by the pound. You can take home the same quality coffee we serve in the cafe."
            },
            {
              id: "5",
              title: "Is there parking available?",
              content: "We have a small parking lot behind the building with 8 spaces, plus street parking is available on both sides of the street."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Visit Us"
          tagIcon={MapPin}
          title="Stop by for a perfect cup"
          description="Join our coffee community and stay updated with our latest blends, events, and special offers."
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive updates about our coffee, events, and special offers. Unsubscribe anytime."
          imageSrc="https://images.pexels.com/photos/18105587/pexels-photo-18105587.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Cozy coffee shop interior with comfortable seating"
          mediaPosition="right"
          onSubmit={(email) => console.log('Newsletter subscription:', email)}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Menu",
              items: [
                { label: "Coffee Drinks", href: "products" },
                { label: "Pastries", href: "products" },
                { label: "Whole Beans", href: "products" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Our Story", href: "about" },
                { label: "Our Team", href: "team" },
                { label: "Sustainability", href: "about" }
              ]
            },
            {
              title: "Visit",
              items: [
                { label: "Location", href: "contact" },
                { label: "Hours", href: "contact" },
                { label: "Contact", href: "contact" }
              ]
            }
          ]}
          copyrightText="© 2025 | BrewCafe"
          onPrivacyClick={() => console.log('Privacy policy clicked')}
        />
      </div>
    </ThemeProvider>
  );
}