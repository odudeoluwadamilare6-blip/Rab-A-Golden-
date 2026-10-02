/**
 * RAB A GOLDEN HERITAGE — CLIENT JAVASCRIPT
 * Catalog, Search, Enquiry Cart, and Dedicated Store Inventory Controller
 * Wholesale Quotations on Request
 */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // 1. Actual Store Inventory Dataset (with Full Visibility & Specs)
  // --------------------------------------------------------------------------
  const STORE_INVENTORY = [
    // MDF Boards (Exact 19 Varieties in Stock)
    {
      id: 'mdf-1',
      name: 'Amala',
      category: 'mdf',
      catLabel: 'MDF Board',
      finish: 'Polished Woodgrain',
      dimensions: '4ft × 8ft (1220 × 2440mm)',
      thickness: '18mm, 15mm, 12mm, 9mm',
      applications: 'Luxury Wardrobes, Kitchen Cabinets, TV Units',
      image: 'assets/rab-a-golden/mdf-boards.png',
      desc: 'Warm polished interior grade Amala MDF board. Known for exceptional core density, smooth edge routing, and superior screw holding power for fine carpentry.'
    },
    {
      id: 'mdf-2',
      name: 'Akala',
      category: 'mdf',
      catLabel: 'MDF Board',
      finish: 'Natural Woodgrain',
      dimensions: '4ft × 8ft (1220 × 2440mm)',
      thickness: '18mm, 15mm, 12mm',
      applications: 'Joinery, Office Desks, Residential Bookshelves',
      image: 'assets/rab-a-golden/mdf-boards.png',
      desc: 'Classic Akala series furniture MDF board. Highly reliable, trusted by experienced carpenters across Nigeria for clean cutting and minimal tool wear.'
    },
    {
      id: 'mdf-3',
      name: 'New Akala',
      category: 'mdf',
      catLabel: 'MDF Board',
      finish: 'Refined Fine Grain',
      dimensions: '4ft × 8ft (1220 × 2440mm)',
      thickness: '18mm, 15mm',
      applications: 'Custom Carcases, Wardrobe Divisions, Bed Frames',
      image: 'assets/rab-a-golden/mdf-boards.png',
      desc: 'Refined New Akala board with an upgraded ultra-dense fiber formulation. Smooth face prevents chipping and provides crisp, clean joints.'
    },
    {
      id: 'mdf-4',
      name: 'Akala Masonia',
      category: 'mdf',
      catLabel: 'MDF Board',
      finish: 'Masonia Timber Grain',
      dimensions: '4ft × 8ft (1220 × 2440mm)',
      thickness: '18mm, 15mm',
      applications: 'Walk-in Closets, Architectural Paneling, Executive Desks',
      image: 'assets/rab-a-golden/mdf-boards.png',
      desc: 'Akala Masonia features a distinctive natural linear woodgrain pattern. Delivers an upscale, stately aesthetic for high-end residential interiors.'
    },
    {
      id: 'mdf-5',
      name: 'White Masonia',
      category: 'mdf',
      catLabel: 'MDF Board',
      finish: 'Light Timber-Veined',
      dimensions: '4ft × 8ft (1220 × 2440mm)',
      thickness: '18mm, 15mm',
      applications: 'Scandinavian Interiors, Bright Kitchens, Dressers',
      image: 'assets/rab-a-golden/white-back-cover.jpg',
      desc: 'Clean White Masonia MDF blending soft wood veining with bright modern tones. Moisture-resistant surface that cleans effortlessly.'
    },
    {
      id: 'mdf-6',
      name: 'Wenge',
      category: 'mdf',
      catLabel: 'MDF Board',
      finish: 'Dark Espresso Linear Grain',
      dimensions: '4ft × 8ft (1220 × 2440mm)',
      thickness: '18mm, 15mm',
      applications: 'Executive Boardrooms, Hotel Suites, Accent Panels',
      image: 'assets/rab-a-golden/stone-black-mdf.jpg',
      desc: 'Deep espresso dark Wenge MDF board with linear grain structure. Provides sophisticated contrast and dramatic architectural depth.'
    },
    {
      id: 'mdf-7',
      name: 'Cedar',
      category: 'mdf',
      catLabel: 'MDF Board',
      finish: 'Warm Golden Cedar',
      dimensions: '4ft × 8ft (1220 × 2440mm)',
      thickness: '18mm, 15mm',
      applications: 'Fitted Bedroom Wardrobes, Interior Doors, Credenzas',
      image: 'assets/rab-a-golden/mdf-boards.png',
      desc: 'Rich warm Cedar tone MDF board. Ideal for luxury master bedroom cabinetry, offering warmth and traditional artisan character.'
    },
    {
      id: 'mdf-8',
      name: 'Safari',
      category: 'mdf',
      catLabel: 'MDF Board',
      finish: 'Warm Earthy Safari Grain',
      dimensions: '4ft × 8ft (1220 × 2440mm)',
      thickness: '18mm, 15mm',
      applications: 'Living Room Consoles, Shelving, Custom Furniture',
      image: 'assets/fediboards/mdf-board-warm.jpg',
      desc: 'Warm golden Safari finish MDF board with an earthy organic grain. Tough scratch-resistant coat built for daily residential use.'
    },
    {
      id: 'mdf-9',
      name: 'Pinks',
      category: 'mdf',
      catLabel: 'MDF Board',
      finish: 'Pastel Blush Satin',
      dimensions: '4ft × 8ft (1220 × 2440mm)',
      thickness: '18mm',
      applications: 'Boutique Display Counters, Nurseries, Vanity Units',
      image: 'assets/rab-a-golden/mdf-boards.png',
      desc: 'Delicate pastel blush Pinks decorative MDF board. Provides a unique, soft designer accent for creative retail and modern boutique spaces.'
    },
    {
      id: 'mdf-10',
      name: 'Switch',
      category: 'mdf',
      catLabel: 'MDF Board',
      finish: 'Textured Switch Grain',
      dimensions: '4ft × 8ft (1220 × 2440mm)',
      thickness: '18mm, 15mm',
      applications: 'Wardrobe Shutter Doors, Office Storage, Room Dividers',
      image: 'assets/rab-a-golden/mdf-boards.png',
      desc: 'Industry benchmark Switch MDF board. High stability, zero warping, and perfectly color-matched with our Switch PVC edge tape.'
    },
    {
      id: 'mdf-11',
      name: 'Tom-Tom',
      category: 'mdf',
      catLabel: 'MDF Board',
      finish: 'Geometric Accent Pattern',
      dimensions: '4ft × 8ft (1220 × 2440mm)',
      thickness: '18mm',
      applications: 'Media Feature Walls, Reception Desks, Accent Panels',
      image: 'assets/rab-a-golden/stone-black-mdf.jpg',
      desc: 'High-contrast Tom-Tom patterned MDF board designed for statement focal points, custom entertainment centers, and hospitality interiors.'
    },
    {
      id: 'mdf-12',
      name: 'Cappuccino / Carton',
      category: 'mdf',
      catLabel: 'MDF Board',
      finish: 'Velvety Taupe Neutral',
      dimensions: '4ft × 8ft (1220 × 2440mm)',
      thickness: '18mm, 15mm',
      applications: 'Contemporary Kitchens, Office Workstations, Closets',
      image: 'assets/rab-a-golden/particle-boards.png',
      desc: 'Velvety Cappuccino / Carton neutral shade MDF board. Calming earth tone that pairs seamlessly with gold handles and stone countertops.'
    },
    {
      id: 'mdf-13',
      name: 'Light Grey',
      category: 'mdf',
      catLabel: 'MDF Board',
      finish: 'Modern Matte Grey',
      dimensions: '4ft × 8ft (1220 × 2440mm)',
      thickness: '18mm, 15mm',
      applications: 'Minimalist Kitchens, Corporate Offices, Fitted Wardrobes',
      image: 'assets/rab-a-golden/white-back-cover.jpg',
      desc: 'Ultra-clean Light Grey matte finish MDF board. Smooth surface resisting fingerprints, ideal for Scandinavian and minimalist schemes.'
    },
    {
      id: 'mdf-14',
      name: 'Dark Grey',
      category: 'mdf',
      catLabel: 'MDF Board',
      finish: 'Charcoal Slate Matte',
      dimensions: '4ft × 8ft (1220 × 2440mm)',
      thickness: '18mm, 15mm',
      applications: 'Industrial Style Joinery, Executive Office Suites',
      image: 'assets/rab-a-golden/stone-black-mdf.jpg',
      desc: 'Bold industrial Dark Grey matte finish MDF board. Robust scratch-resistant coat providing an authoritative, modern finish.'
    },
    {
      id: 'mdf-15',
      name: 'Off White',
      category: 'mdf',
      catLabel: 'MDF Board',
      finish: 'Warm Ivory Matte',
      dimensions: '4ft × 8ft (1220 × 2440mm)',
      thickness: '18mm, 15mm, 12mm',
      applications: 'Whole-Home Cabinetry, Bathroom Vanities, Pantries',
      image: 'assets/rab-a-golden/white-back-cover.jpg',
      desc: 'Warm Off White laminated MDF board. Soft glare-free reflection, offering a cozy alternative to pure stark white.'
    },
    {
      id: 'mdf-16',
      name: 'White',
      category: 'mdf',
      catLabel: 'MDF Board',
      finish: 'Pristine Pure White',
      dimensions: '4ft × 8ft (1220 × 2440mm)',
      thickness: '18mm, 15mm, 12mm, 9mm',
      applications: 'Kitchen Carcases, Wardrobe Interiors, Commercial Shelves',
      image: 'assets/rab-a-golden/white-back-cover.jpg',
      desc: 'Pristine pure White double-sided laminated MDF board. Smooth water-resistant face, universally used for cabinetry carcasses and shelving.'
    },
    {
      id: 'mdf-17',
      name: 'Black',
      category: 'mdf',
      catLabel: 'MDF Board',
      finish: 'Solid Jet Black Matte',
      dimensions: '4ft × 8ft (1220 × 2440mm)',
      thickness: '18mm, 15mm',
      applications: 'Modern Kitchen Islands, Media Consoles, Commercial Bars',
      image: 'assets/rab-a-golden/stone-black-mdf.jpg',
      desc: 'Solid deep black finish MDF board. Non-reflective surface, ideal for moody luxury aesthetics, accent trims, and modern cabinetry.'
    },
    {
      id: 'mdf-18',
      name: 'Ara Marble White',
      category: 'mdf',
      catLabel: 'MDF Board',
      finish: 'Calacatta Marble Veining',
      dimensions: '4ft × 8ft (1220 × 2440mm)',
      thickness: '18mm',
      applications: 'Vanity Countertops, Island Benches, Hotel Lobby Furniture',
      image: 'assets/rab-a-golden/white-back-cover.jpg',
      desc: 'Luxury marble-patterned Ara MDF board. Beautiful realistic grey veins over a bright white field, replicating genuine stone slab elegance.'
    },
    {
      id: 'mdf-19',
      name: 'Ara Marble Black',
      category: 'mdf',
      catLabel: 'MDF Board',
      finish: 'Marquina Black Marble',
      dimensions: '4ft × 8ft (1220 × 2440mm)',
      thickness: '18mm',
      applications: 'Statement TV Consoles, Cocktail Bars, Master Closets',
      image: 'assets/rab-a-golden/stone-black-mdf.jpg',
      desc: 'Prestige dark marble-patterned Ara MDF board. Deep midnight black with intricate gold and white striations for breathtaking luxury fittings.'
    },

    // Blockboard (B/B)
    {
      id: 'bb-1',
      name: 'Akala B/B',
      category: 'blockboard',
      catLabel: 'Block Board',
      finish: 'Solid Timber Core Veneer',
      dimensions: '4ft × 8ft (1220 × 2440mm)',
      thickness: '18mm',
      applications: 'Long Spanning Shelves, Heavy Doors, Structural Carcases',
      image: 'assets/rab-a-golden/particle-boards.png',
      desc: 'High-strength solid core timber blockboard. Resistant to sagging under heavy loads, ideal for wide wardrobe shelving and sliding doors.'
    },
    {
      id: 'bb-2',
      name: 'Switch B/B',
      category: 'blockboard',
      catLabel: 'Block Board',
      finish: 'Switch Veneered Core',
      dimensions: '4ft × 8ft (1220 × 2440mm)',
      thickness: '18mm',
      applications: 'Cabinet Doors, Partition Walls, Premium Tables',
      image: 'assets/rab-a-golden/particle-boards.png',
      desc: 'Premium timber strip core Switch Blockboard with smooth face veneers. Outstanding dimensional stability with zero sag.'
    },
    {
      id: 'bb-3',
      name: 'Dark Gray B/B',
      category: 'blockboard',
      catLabel: 'Block Board',
      finish: 'Dark Gray Surface Veneer',
      dimensions: '4ft × 8ft (1220 × 2440mm)',
      thickness: '18mm',
      applications: 'Office Desk Tops, Partitions, Modern Storage Units',
      image: 'assets/rab-a-golden/particle-boards.png',
      desc: 'Dark gray surface finish solid timber core Blockboard. Engineered for high rigidity and an industrial executive presence.'
    },
    {
      id: 'bb-4',
      name: 'Amala B/B',
      category: 'blockboard',
      catLabel: 'Block Board',
      finish: 'Amala Timber Core Veneer',
      dimensions: '4ft × 8ft (1220 × 2440mm)',
      thickness: '18mm',
      applications: 'Heavy Wardrobes, Bookcases, Bed Frames',
      image: 'assets/rab-a-golden/particle-boards.png',
      desc: 'Amala solid wood strip core blockboard. Superior screw retention into edge and face, maximum longevity under heavy loads.'
    },

    // Special Boards
    {
      id: 'spec-1',
      name: 'HDF High Gloss',
      category: 'special',
      catLabel: 'Special Board',
      finish: 'Ultra-Reflective Acrylic Gloss',
      dimensions: '4ft × 8ft (1220 × 2440mm)',
      thickness: '18mm',
      applications: 'Luxury High-End Kitchen Fronts, Vanity Doors, Wall Slabs',
      image: 'assets/fediboards/hdf-board-fedi1.jpg',
      desc: 'Ultra-reflective acrylic mirror finish HDF panel from FediBoards. High density moisture resistant core with an immaculate glass-smooth reflection.'
    },
    {
      id: 'spec-2',
      name: 'Back Cover White',
      category: 'special',
      catLabel: 'Back Cover',
      finish: 'White Satin Laminated',
      dimensions: '4ft × 8ft (1220 × 2440mm)',
      thickness: '3mm / 4mm',
      applications: 'Wardrobe Backings, Cabinet Rear Enclosures, Drawer Bottoms',
      image: 'assets/rab-a-golden/white-back-cover.jpg',
      desc: 'Clean white wardrobe and cabinet backing board panel. Lightweight, flexible, providing a neat dust-proof interior seal.'
    },
    {
      id: 'spec-3',
      name: 'Back Cover White – Quarter',
      category: 'special',
      catLabel: 'Back Cover',
      finish: 'White Satin Quarter Cut',
      dimensions: '4ft × 2ft (Quarter Sheet)',
      thickness: '3mm / 4mm',
      applications: 'Small Drawer Bottoms, Bedside Units, Niche Backings',
      image: 'assets/rab-a-golden/white-back-cover.jpg',
      desc: 'Quarter cut pre-sized white back cover board for custom compact shelving units and drawer bottom inserts.'
    },
    {
      id: 'spec-4',
      name: 'Quarter Plywood',
      category: 'special',
      catLabel: 'Special Board',
      finish: 'Hardwood Rotary Veneer',
      dimensions: '4ft × 8ft (1220 × 2440mm)',
      thickness: '6mm (Quarter Inch)',
      applications: 'Structural Backing, Curved Furniture, Drawer Bottoms',
      image: 'assets/rab-a-golden/plywood.png',
      desc: 'Quarter inch high-strength multi-ply furniture plywood. Excellent tensile strength, moisture tolerance, and cross-grain stability.'
    },

    // Wall Panels & Cladding (FediBoards Collection)
    {
      id: 'wp-1',
      name: 'Fluted WPC Wall Panel (Natural Oak)',
      category: 'wallpanel',
      catLabel: 'Wall Panel',
      finish: 'Natural Oak Woodgrain 3D Fluted',
      dimensions: '160mm × 2900mm (2.9m length)',
      thickness: '22mm Fluted Profile',
      applications: 'Feature Walls, TV Media Backdrops, Accent Ceilings, Headboards',
      image: 'assets/fediboards/wall-panel-fluted.jpg',
      desc: 'High-density wood-plastic composite (WPC) fluted wall cladding panel from FediBoards. 100% waterproof, termite-proof, with deep textured realistic oak grain.'
    },
    {
      id: 'wp-2',
      name: 'Acoustic Slat Wood Wall Panel',
      category: 'wallpanel',
      catLabel: 'Wall Panel',
      finish: 'Natural Walnut on Black Felt',
      dimensions: '600mm × 2400mm (0.6m × 2.4m)',
      thickness: '21mm (12mm slat + 9mm acoustic felt)',
      applications: 'Home Theatres, Conference Rooms, Luxury Living Rooms, Studios',
      image: 'assets/fediboards/wall-panels-acoustic.jpg',
      desc: 'High-performance sound-absorbing acoustic slat wood panel from FediBoards. Absorbs echo and reverberation while delivering a warm Scandinavian luxury architectural aesthetic.'
    },
    {
      id: 'wp-3',
      name: 'Charcoal Matte Fluted Wall Panel',
      category: 'wallpanel',
      catLabel: 'Wall Panel',
      finish: 'Architectural Charcoal Matte',
      dimensions: '160mm × 2900mm (2.9m length)',
      thickness: '22mm Fluted Profile',
      applications: 'Modern Offices, Headboards, Reception Desks, Accent Walls',
      image: 'assets/fediboards/wall-panel-fluted.jpg',
      desc: 'Striking contemporary charcoal fluted wall panel from FediBoards. Moisture-resistant, easy tongue-and-groove interlocking installation, zero maintenance required.'
    },
    {
      id: 'wp-4',
      name: 'Natural Teak Acoustic Slat Panel',
      category: 'wallpanel',
      catLabel: 'Wall Panel',
      finish: 'Golden Natural Teak Slat Veneer',
      dimensions: '600mm × 2400mm (0.6m × 2.4m)',
      thickness: '21mm Engineered Slat Felt',
      applications: 'Hallways, Dining Areas, Executive Suites, Commercial Spaces',
      image: 'assets/fediboards/wall-panels-acoustic.jpg',
      desc: 'Real teak wood veneer slats mounted on recycled polyester acoustic damping felt. Superior sound dampening and high-end natural warmth from FediBoards.'
    },

    // Edge Banding
    {
      id: 'edge-1',
      name: 'Edge Tape Switch (30 yard)',
      category: 'edge',
      catLabel: 'Edge Tape',
      finish: 'Color-Matched Switch Pattern',
      dimensions: '30 Yards (approx. 27.4m) × 22mm',
      thickness: '0.8mm / 1mm PVC',
      applications: 'Edge sealing for Switch MDF boards, cabinet doors',
      image: 'assets/fediboards/edge-banding-fedi.jpg',
      desc: 'Durable PVC Switch matching edge banding tape roll (30 yards). Impact-resistant edge protection preventing chipping and moisture ingress.'
    },
    {
      id: 'edge-2',
      name: 'Black Edge Tape',
      category: 'edge',
      catLabel: 'Edge Tape',
      finish: 'Matte Solid Black',
      dimensions: '50m / 30yd Roll × 22mm',
      thickness: '1mm PVC',
      applications: 'Black MDF, Stone Black, Dark Grey board edging',
      image: 'assets/fediboards/edge-banding-fedi.jpg',
      desc: 'Matte black PVC edge banding roll for dark and black MDF boards. High heat resistance for flawless hot-melt or manual application.'
    },
    {
      id: 'edge-3',
      name: 'White Edge Tape',
      category: 'edge',
      catLabel: 'Edge Tape',
      finish: 'Pure Matte White',
      dimensions: '50m / 30yd Roll × 22mm',
      thickness: '1mm PVC',
      applications: 'White carcass boards, White Masonia, drawer borders',
      image: 'assets/fediboards/edge-banding-fedi.jpg',
      desc: 'Clean white PVC edge banding roll. Provides sharp, hygienic seams for white kitchen cabinets and wardrobe shelving.'
    },
    {
      id: 'edge-4',
      name: 'Dark Edge Tape',
      category: 'edge',
      catLabel: 'Edge Tape',
      finish: 'Espresso Charcoal Shade',
      dimensions: '50m / 30yd Roll × 22mm',
      thickness: '1mm PVC',
      applications: 'Wenge, Dark Grey, Ara Marble Black borders',
      image: 'assets/fediboards/edge-banding-fedi.jpg',
      desc: 'Dark espresso and charcoal edge banding roll. Seamless matching for dark walnut, mahogany, and dark marble-veined boards.'
    },

    // Handles
    {
      id: 'hnd-1',
      name: '2 Line Handle 6"',
      category: 'handles',
      catLabel: 'Handle',
      finish: 'Matte Black Dual-Bar',
      dimensions: '6 Inch (152mm) Hole-to-Hole',
      thickness: 'Solid Zinc Alloy Metal',
      applications: 'Kitchen Pulls, Wardrobe Doors, Wide Drawers',
      image: 'assets/rab-a-golden/line-handle.jpg',
      desc: 'Modern dual-bar matte black cabinet pull handle, 6 inch length. Ergonomic grip with anti-tarnish protective coating.'
    },
    {
      id: 'hnd-2',
      name: 'Pipe Handle Black',
      category: 'handles',
      catLabel: 'Handle',
      finish: 'Matte Industrial Black',
      dimensions: 'Tubular Length 8" - 12"',
      thickness: 'Hollow/Solid Stainless Steel',
      applications: 'Tall Wardrobes, Pantry Doors, Modern Kitchens',
      image: 'assets/rab-a-golden/line-handle.jpg',
      desc: 'Tubular industrial black metal handle. Sturdy minimalist cylinder styling suitable for vertical full-height wardrobe doors.'
    },
    {
      id: 'hnd-3',
      name: 'Nob Handle',
      category: 'handles',
      catLabel: 'Handle',
      finish: 'Brushed Satin Gold / Black',
      dimensions: '30mm Diameter × 25mm Height',
      thickness: 'Solid Brass & Zinc Alloy',
      applications: 'Bedside Drawers, Dressing Tables, Cupboard Shutters',
      image: 'assets/rab-a-golden/line-handle.jpg',
      desc: 'Solid round knob handle for wardrobes, bedside cabinets, and drawers. Timeless circular form with a comfortable pinch grip.'
    },
    {
      id: 'hnd-4',
      name: 'Fashion Handle',
      category: 'handles',
      catLabel: 'Handle',
      finish: 'Luxury Black & Gold Accent',
      dimensions: 'Standard 128mm / 160mm',
      thickness: 'High Precision Die-Cast Metal',
      applications: 'Designer Wardrobes, Executive Desks, Vanity Units',
      image: 'assets/rab-a-golden/line-handle.jpg',
      desc: 'Luxury designer cabinet and wardrobe pull with gold and black accents. Instantly elevates residential cabinetry to high-end bespoke status.'
    },

    // Drawer Hardware
    {
      id: 'drw-1',
      name: 'Drawer Runner 10"',
      category: 'drawer',
      catLabel: 'Drawer Hardware',
      finish: 'Zinc Plated Steel',
      dimensions: '10 Inch (250mm) Length',
      thickness: 'Ball-Bearing Pair (Left + Right)',
      applications: 'Nightstand Drawers, Office Pedestals, Shallow Units',
      image: 'assets/rab-a-golden/drawer-runner.jpg',
      desc: '10 inch smooth steel ball-bearing drawer slide runner pair. Silent travel and high lateral stability for compact drawer boxes.'
    },
    {
      id: 'drw-2',
      name: 'Drawer Runner 12"',
      category: 'drawer',
      catLabel: 'Drawer Hardware',
      finish: 'Heavy Gauge Cold-Rolled Steel',
      dimensions: '12 Inch (300mm) Length',
      thickness: 'Ball-Bearing Pair (35kg Load Rating)',
      applications: 'Kitchen Pot Drawers, Wardrobe Drawers, Tool Boxes',
      image: 'assets/rab-a-golden/drawer-runner.jpg',
      desc: '12 inch heavy-duty full-extension ball-bearing slide runners. Allows full access to drawer contents with whisper-quiet gliding.'
    },

    // Hinges & Brackets
    {
      id: 'hng-1',
      name: 'Cabinet Hinges',
      category: 'hinges',
      catLabel: 'Hinges',
      finish: 'Nickel Plated Stainless Steel',
      dimensions: '35mm Cup Diameter (Full Overlay)',
      thickness: 'Hydraulic Soft-Close Core',
      applications: 'Kitchen Wall Cabinets, Wardrobe Doors, Sideboards',
      image: 'assets/rab-a-golden/cabinet-hinges.jpg',
      desc: 'Hydraulic soft-closing stainless steel cabinet hinges pair. Built-in hydraulic damper prevents doors from slamming.'
    },
    {
      id: 'hng-2',
      name: 'Angle Bracket',
      category: 'hinges',
      catLabel: 'Brackets',
      finish: 'Zinc Coated Reinforced Steel',
      dimensions: '90-Degree L-Corner Support',
      thickness: '2mm Heavy Duty Steel',
      applications: 'Carcass Bracing, Shelf Support, Internal Framing',
      image: 'assets/rab-a-golden/hardware-fittings.png',
      desc: 'Heavy-duty steel 90-degree corner support angle bracket. Ensures rigidity and square alignment for modular furniture assemblies.'
    },
    {
      id: 'hng-3',
      name: 'Switch Bracket',
      category: 'hinges',
      catLabel: 'Brackets',
      finish: 'Specialized Joinery Bracket',
      dimensions: 'Multi-Hole Fastening Pattern',
      thickness: 'Hardened Carbon Steel',
      applications: 'Switch Board Joinery, Bed Frame Connectors',
      image: 'assets/fediboards/accessories-fedi.jpg',
      desc: 'Specialized Switch furniture assembly bracket designed for reinforced joints and concealed heavy-duty connections.'
    },

    // Keys / Locks
    {
      id: 'key-1',
      name: 'Key 1T',
      category: 'locks',
      catLabel: 'Keys & Locks',
      finish: 'Chrome Plated Cylinder',
      dimensions: '19mm Cylinder Bore Diameter',
      thickness: '1T Lock Mechanism + 2 Master Keys',
      applications: 'Office Drawers, Desk Pedestals, Lockers',
      image: 'assets/rab-a-golden/hardware-fittings.png',
      desc: '1T security drawer and cupboard lock cylinder with brass keys. Smooth cam rotation ensuring dependable everyday office security.'
    },
    {
      id: 'key-2',
      name: 'Key 2T',
      category: 'locks',
      catLabel: 'Keys & Locks',
      finish: 'Heavy Duty Chrome Finish',
      dimensions: '22mm Cylinder Bore Diameter',
      thickness: '2T Reinforced Barrel Lock',
      applications: 'Executive Desks, Filing Cabinets, Storage Closets',
      image: 'assets/rab-a-golden/hardware-fittings.png',
      desc: '2T heavy-duty furniture desk lock set. Enhanced security tumblers resistant to picking and forcing.'
    },

    // Screws
    {
      id: 'scr-1',
      name: 'Screw 5/8"',
      category: 'screws',
      catLabel: 'Screws',
      finish: 'Zinc Plated Steel',
      dimensions: '5/8 Inch (approx. 16mm)',
      thickness: 'Countersunk Cross Head (100 Pcs/Pack)',
      applications: 'Hinge Fastening, Runner Mounting, 18mm Board Backing',
      image: 'assets/rab-a-golden/screw-5-8.jpg',
      desc: 'Zinc-plated wood screws 5/8 inch (100 pieces per pack). Precise threads bite cleanly into MDF without splitting edge boards.'
    },
    {
      id: 'scr-2',
      name: 'Screw 2"',
      category: 'screws',
      catLabel: 'Screws',
      finish: 'Hardened Carbon Steel Coated',
      dimensions: '2 Inch (approx. 50mm)',
      thickness: 'Coarse Thread Framing Screws (Pack)',
      applications: 'Carcass Assembly, Solid Wood Framing, Heavy Brackets',
      image: 'assets/rab-a-golden/screw-5-8.jpg',
      desc: '2 inch heavy-duty carpentry wood screws pack. Deep coarse threads designed for strong wood-to-wood and board joints.'
    },
    {
      id: 'scr-3',
      name: 'Screw Inch & Q',
      category: 'screws',
      catLabel: 'Screws',
      finish: 'Yellow Zinc Anti-Corrosion',
      dimensions: '1-1/4 Inch (Inch & Quarter)',
      thickness: 'Precision Fasteners (Pack)',
      applications: 'General Cabinet Assembly, Double Board Joinery',
      image: 'assets/rab-a-golden/screw-5-8.jpg',
      desc: '1-1/4 inch precision wood screws pack. Universal carpentry fastener for joining two 18mm boards securely.'
    },

    // Adhesives
    {
      id: 'adh-1',
      name: 'Efortic Gum',
      category: 'adhesives',
      catLabel: 'Adhesives',
      finish: 'Industrial Contact Adhesive',
      dimensions: 'Standard Workshop Can / Drum',
      thickness: 'High Solid Bond Contact Cement',
      applications: 'Laminate Bonding, Formica, Edge Tape, Veneer Pressing',
      image: 'assets/rab-a-golden/hardware-fittings.png',
      desc: 'Industrial high-strength contact adhesive for laminates, veneer and woodwork. Instant tack with exceptional moisture and heat tolerance.'
    },
    {
      id: 'adh-2',
      name: 'Silicon Gum',
      category: 'adhesives',
      catLabel: 'Adhesives',
      finish: 'Clear / White Flexible Silicone',
      dimensions: '300ml Standard Cartridge',
      thickness: '100% Waterproof RTV Sealant',
      applications: 'Countertop Sealing, Sink Cutouts, Splashbacks, Glass',
      image: 'assets/rab-a-golden/hardware-fittings.png',
      desc: 'Waterproof sealant and silicone adhesive cartridge for countertops, sinks, and bathroom cabinets. Prevents water swelling.'
    },

    // Workshop & Tools
    {
      id: 'wrk-1',
      name: 'Tornado 2 & Half',
      category: 'workshop',
      catLabel: 'Workshop Items',
      finish: 'High Carbon Steel Fastener Set',
      dimensions: '2-1/2 Inch Heavy Duty Spec',
      thickness: 'Workshop Grade Fastener System',
      applications: 'Heavy Framework, Timber Truss Joinery, Workshop Jigging',
      image: 'assets/fediboards/accessories-fedi.jpg',
      desc: 'Tornado 2-1/2 heavy-duty fastener tool set from FediBoards accessories. Engineered for maximum holding strength in structural wood and framework fabrication.'
    },
    {
      id: 'wrk-2',
      name: 'Hand Samper',
      category: 'workshop',
      catLabel: 'Workshop Items',
      finish: 'Ergonomic Gripped Block',
      dimensions: 'Standard Abrasive Paper Clamp',
      thickness: 'Dense EVA Cushion Base',
      applications: 'Board Edge Sanding, Primer Leveling, Pre-Veneer Smoothing',
      image: 'assets/rab-a-golden/hardware-fittings.png',
      desc: 'Ergonomic hand sander block for smooth woodwork finishing. Quick-clamp system locks sandpaper firmly for flat, even edge prep.'
    },
    {
      id: 'wrk-3',
      name: 'Panel',
      category: 'workshop',
      catLabel: 'Workshop Items',
      finish: 'Heavy Duty Utility Surface',
      dimensions: 'Standard Workshop Modular Dimension',
      thickness: 'Engineered Board Panel',
      applications: 'Workshop Assembly Tables, Protective Jigs, Template Routing',
      image: 'assets/rab-a-golden/mdf-boards.png',
      desc: 'Multi-use workshop utility panel. High impact resistance, flat work surface for bench assembly and template cutting.'
    },
    {
      id: 'wrk-4',
      name: 'G Saw Blade',
      category: 'workshop',
      catLabel: 'Workshop Items',
      finish: 'Tungsten Carbide Tipped (TCT)',
      dimensions: 'Standard Circular Saw Arbor & Diameter',
      thickness: 'High Tooth Count Clean Cut',
      applications: 'MDF Slicing, Laminated Board Ripping, Chip-Free Trimming',
      image: 'assets/fediboards/accessories-fedi.jpg',
      desc: 'Precision carbide-tipped circular saw blade for clean board cutting from FediBoards toolline. Triple-chip grind teeth eliminate edge blowout and chipping on melamine.'
    }
  ];

  // --------------------------------------------------------------------------
  // 2. Order & Enquiry List Management (Quotation on Request - Syncs Both Pages)
  // --------------------------------------------------------------------------
  let cart = JSON.parse(localStorage.getItem('rag_enquiry_cart_v1')) || [];

  const cartTrigger = document.getElementById('cart-trigger');
  const cartDrawer = document.getElementById('cart-drawer');
  const cartOverlay = document.getElementById('cart-drawer-overlay');
  const cartCloseBtn = document.getElementById('cart-close-btn');
  const cartContinueBtn = document.getElementById('cart-continue-btn');
  const cartItemsList = document.getElementById('cart-items-list');
  const cartBadgeCount = document.getElementById('cart-badge-count');
  const cartItemsCounter = document.getElementById('cart-items-counter');
  const cartTotalItemsCount = document.getElementById('cart-total-items-count');
  const cartCheckoutWhatsappBtn = document.getElementById('cart-checkout-whatsapp-btn');
  const notificationToast = document.getElementById('notification-toast');
  const toastMessage = document.getElementById('toast-message');

  const showToast = (msg) => {
    if (!notificationToast) return;
    if (toastMessage) toastMessage.textContent = msg;
    notificationToast.classList.add('show');
    setTimeout(() => {
      notificationToast.classList.remove('show');
    }, 2800);
  };

  const renderCart = () => {
    if (!cartItemsList) return;

    if (cart.length === 0) {
      cartItemsList.innerHTML = `
        <div style="text-align: center; padding: 48px 0; color: #8a7868;">
          <p style="font-size: 15px; font-weight: 600; color: #2a1508; margin-bottom: 6px;">Your enquiry list is empty</p>
          <span style="font-size: 12.5px;">Browse our boards and accessories to add items.</span>
        </div>
      `;
    } else {
      cartItemsList.innerHTML = cart.map((item) => `
        <div class="cart-item" data-id="${item.id}">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
          <div class="cart-item-info">
            <h4 class="cart-item-title">${item.name}</h4>
            <div class="cart-item-market-tag">Quotation on Request</div>
            <div class="cart-quantity-wrap">
              <button class="qty-btn qty-decrease" data-id="${item.id}">-</button>
              <span class="qty-display">${item.quantity}</span>
              <button class="qty-btn qty-increase" data-id="${item.id}">+</button>
              <button class="cart-item-remove" data-id="${item.id}">Remove</button>
            </div>
          </div>
        </div>
      `).join('');
    }

    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    if (cartBadgeCount) {
      cartBadgeCount.textContent = totalCount;
    }

    if (cartItemsCounter) {
      cartItemsCounter.textContent = `(${totalCount} ${totalCount === 1 ? 'item' : 'items'})`;
    }

    if (cartTotalItemsCount) {
      cartTotalItemsCount.textContent = `${totalCount} ${totalCount === 1 ? 'item' : 'items'}`;
    }

    localStorage.setItem('rag_enquiry_cart_v1', JSON.stringify(cart));
  };

  const openCart = () => {
    cartDrawer?.classList.add('is-active');
    cartOverlay?.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  };

  const closeCart = () => {
    cartDrawer?.classList.remove('is-active');
    cartOverlay?.classList.remove('is-active');
    document.body.style.overflow = '';
  };

  if (cartTrigger) cartTrigger.addEventListener('click', openCart);
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);
  if (cartContinueBtn) cartContinueBtn.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

  // Cart Items Event Delegation (+ / - / Remove)
  if (cartItemsList) {
    cartItemsList.addEventListener('click', (e) => {
      const target = e.target;
      const id = target.getAttribute('data-id');
      if (!id) return;

      if (target.classList.contains('qty-increase')) {
        const item = cart.find(i => i.id === id);
        if (item) {
          item.quantity += 1;
          renderCart();
        }
      } else if (target.classList.contains('qty-decrease')) {
        const idx = cart.findIndex(i => i.id === id);
        if (idx > -1) {
          if (cart[idx].quantity > 1) {
            cart[idx].quantity -= 1;
          } else {
            cart.splice(idx, 1);
          }
          renderCart();
        }
      } else if (target.classList.contains('cart-item-remove')) {
        cart = cart.filter(i => i.id !== id);
        renderCart();
      }
    });
  }

  // Add Item to Cart Helper
  const addItemToCart = (item, qty = 1) => {
    const existing = cart.find(i => i.name === item.name);
    if (existing) {
      existing.quantity += qty;
    } else {
      cart.push({
        id: item.id || ('item-' + Date.now()),
        name: item.name,
        image: item.image,
        quantity: qty
      });
    }
    renderCart();
    showToast(`Added ${qty}x ${item.name} to enquiry list!`);
  };

  // WhatsApp Enquiry Checkout
  if (cartCheckoutWhatsappBtn) {
    cartCheckoutWhatsappBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        alert('Your enquiry list is empty. Please add items to request a quote.');
        return;
      }

      let message = "Hello Rab A Golden Heritage! I would like to request a quotation and check availability for:\n\n";
      cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name} — Qty: ${item.quantity}\n`;
      });
      const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
      message += `\nTotal Items: ${totalCount}\n\nPlease let me know your current quotation and delivery options. Thank you!`;

      const encodedUrl = `https://wa.me/2348138781961?text=${encodeURIComponent(message)}`;
      window.open(encodedUrl, '_blank');
    });
  }

  renderCart();

  // --------------------------------------------------------------------------
  // 3. Product Details Modal Management (Used on Homepage & View Clicks)
  // --------------------------------------------------------------------------
  const productModal = document.getElementById('product-modal');
  const closeProductModalBtn = document.getElementById('close-product-modal');
  const modalImg = document.getElementById('modal-product-img');
  const modalCat = document.getElementById('modal-product-cat');
  const modalTitle = document.getElementById('modal-product-title');
  const modalDesc = document.getElementById('modal-product-desc');
  const modalQtyCount = document.getElementById('modal-qty-count');
  const modalQtyMinus = document.getElementById('modal-qty-minus');
  const modalQtyPlus = document.getElementById('modal-qty-plus');
  const modalAddCartBtn = document.getElementById('modal-add-cart-btn');
  const modalWhatsappEnquiry = document.getElementById('modal-whatsapp-enquiry');

  let currentModalItem = null;
  let currentModalQty = 1;

  const openProductModal = (product) => {
    currentModalItem = product;
    currentModalQty = 1;

    if (modalImg) modalImg.src = product.image;
    if (modalCat) modalCat.textContent = product.catLabel || 'Furniture Material';
    if (modalTitle) modalTitle.textContent = product.name;
    if (modalDesc) modalDesc.textContent = product.desc || 'Premium quality furniture material supplied by Rab A Golden Heritage.';
    if (modalQtyCount) modalQtyCount.textContent = currentModalQty;

    if (modalWhatsappEnquiry) {
      const text = `Hello Rab A Golden, I would like to enquire about availability and quotation for "${product.name}". Please provide details.`;
      modalWhatsappEnquiry.href = `https://wa.me/2348138781961?text=${encodeURIComponent(text)}`;
    }



    productModal?.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  };

  const closeProductModal = () => {
    productModal?.classList.remove('is-active');
    document.body.style.overflow = '';
  };

  if (closeProductModalBtn) closeProductModalBtn.addEventListener('click', closeProductModal);
  if (productModal) {
    productModal.addEventListener('click', (e) => {
      if (e.target === productModal) closeProductModal();
    });
  }

  if (modalQtyPlus) {
    modalQtyPlus.addEventListener('click', () => {
      currentModalQty += 1;
      if (modalQtyCount) modalQtyCount.textContent = currentModalQty;
    });
  }

  if (modalQtyMinus) {
    modalQtyMinus.addEventListener('click', () => {
      if (currentModalQty > 1) {
        currentModalQty -= 1;
        if (modalQtyCount) modalQtyCount.textContent = currentModalQty;
      }
    });
  }

  if (modalAddCartBtn) {
    modalAddCartBtn.addEventListener('click', () => {
      if (currentModalItem) {
        addItemToCart(currentModalItem, currentModalQty);
        closeProductModal();
        openCart();
      }
    });
  }

  // Universal Delegation for Youceef Card Actions (Steppers, Add to Enquiry, Quick View)
  document.addEventListener('click', (e) => {
    // Stepper Plus
    const plusBtn = e.target.closest('.inv-qty-plus');
    if (plusBtn) {
      const card = plusBtn.closest('.youceef-card, .youceef-list-card, .clean-product-card, .inv-card');
      if (card) {
        const valEl = card.querySelector('.inv-qty-val');
        if (valEl) {
          let count = parseInt(valEl.textContent, 10) || 1;
          count += 1;
          valEl.textContent = count;
        }
      }
      return;
    }

    // Stepper Minus
    const minusBtn = e.target.closest('.inv-qty-minus');
    if (minusBtn) {
      const card = minusBtn.closest('.youceef-card, .youceef-list-card, .clean-product-card, .inv-card');
      if (card) {
        const valEl = card.querySelector('.inv-qty-val');
        if (valEl) {
          let count = parseInt(valEl.textContent, 10) || 1;
          if (count > 1) {
            count -= 1;
            valEl.textContent = count;
          }
        }
      }
      return;
    }

    // Modish Add to Order List
    const modishAddBtn = e.target.closest('.modish-add-btn');
    if (modishAddBtn) {
      e.stopPropagation();
      const id = modishAddBtn.getAttribute('data-id');
      const item = STORE_INVENTORY.find(i => i.id === id);
      if (item) {
        addItemToCart(item, 1);
        modishAddBtn.innerHTML = `<span>Added to Order List ✓</span>`;
        modishAddBtn.style.backgroundColor = '#EEF2FF';
        modishAddBtn.style.borderColor = '#1B2D72';
        modishAddBtn.style.color = '#1B2D72';
        setTimeout(() => {
          modishAddBtn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 5v14M5 12h14"/></svg><span>Add to Order List</span>`;
          modishAddBtn.style.backgroundColor = '';
          modishAddBtn.style.borderColor = '';
          modishAddBtn.style.color = '';
        }, 1600);
      }
      return;
    }

    // Modish Favourite Heart Toggle
    const modishFavBtn = e.target.closest('.modish-fav-btn');
    if (modishFavBtn) {
      e.stopPropagation();
      modishFavBtn.classList.toggle('active');
      const isFav = modishFavBtn.classList.contains('active');
      const itemName = modishFavBtn.getAttribute('data-name') || 'Item';
      if (isFav) {
        showToast(`Saved "${itemName}" to favourites ❤️`);
      } else {
        showToast(`Removed "${itemName}" from favourites`);
      }
      return;
    }

    // Add to Enquiry
    const addBtn = e.target.closest('.inv-add-btn');
    if (addBtn) {
      const card = addBtn.closest('.youceef-card, .youceef-list-card, .clean-product-card, .inv-card');
      const id = addBtn.getAttribute('data-id') || (card && card.getAttribute('data-id'));
      const name = addBtn.getAttribute('data-name') || (card && (card.getAttribute('data-name') || card.getAttribute('data-product')));
      
      let item = STORE_INVENTORY.find(i => (id && i.id === id) || (name && i.name.toLowerCase() === name.toLowerCase()));
      if (!item && card) {
        item = {
          id: id || ('item-' + Date.now()),
          name: name || card.querySelector('.youceef-card-title, .card-item-title')?.textContent.trim() || 'Item',
          image: card.querySelector('img')?.getAttribute('src') || 'assets/rab-a-golden/mdf-boards.png'
        };
      }

      const valEl = card ? card.querySelector('.inv-qty-val') : null;
      const qty = valEl ? (parseInt(valEl.textContent, 10) || 1) : 1;

      if (item) {
        addItemToCart(item, qty);
        addBtn.innerHTML = `<span>Added! ✓</span>`;
        setTimeout(() => {
          addBtn.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg><span>+ Add</span>`;
        }, 1600);
      }
      return;
    }

    // View Product / Quick View
    const viewBtn = e.target.closest('.btn-view-product, .youceef-quickview-btn');
    if (viewBtn) {
      if (e.target.closest('.modish-fav-btn') || e.target.closest('.btn-modish-whatsapp') || e.target.closest('.modish-add-btn')) {
        return;
      }
      const card = viewBtn.closest('.modish-card, .modish-list-card, .youceef-card, .youceef-list-card, .clean-product-card, .inv-card');
      const name = viewBtn.getAttribute('data-product') || viewBtn.getAttribute('data-name') || (card && (card.getAttribute('data-name') || card.getAttribute('data-product')));
      const cat = viewBtn.getAttribute('data-cat') || (card && card.getAttribute('data-cat'));
      const image = viewBtn.getAttribute('data-img') || (card && card.querySelector('img')?.getAttribute('src'));

      const item = STORE_INVENTORY.find(i => name && (i.name.toLowerCase() === name.toLowerCase())) || {
        name: name || 'Furniture Material',
        catLabel: cat || 'Material',
        image: image || 'assets/rab-a-golden/mdf-boards.png',
        desc: `High quality ${name} available at Rab A Golden Heritage store.`
      };

      openProductModal(item);
      return;
    }
  });

  // --------------------------------------------------------------------------
  // 4. Store Catalogue Modal (Spacious Modal with Full Details & Page Link)
  // --------------------------------------------------------------------------
  const catalogueModal = document.getElementById('catalogue-modal');
  const closeCatalogueModalBtn = document.getElementById('close-catalogue-modal');
  const openCatalogueBtn = document.getElementById('open-catalogue-btn');
  const viewAllCategoriesBtn = document.getElementById('view-all-categories-btn');
  const filterBoardsBtn = document.querySelector('.filter-boards-catalogue');
  const filterAccBtn = document.querySelector('.filter-acc-catalogue');
  const catalogueItemsGrid = document.getElementById('catalogue-items-grid');
  const cataloguePills = document.querySelectorAll('.cat-pill-filter');

  // --------------------------------------------------------------------------
  // 3b. Youceef Global Card Component Helpers (Used for All Products across the Site)
  // --------------------------------------------------------------------------
  const createYouceefCard = (item) => {
    const app = item.applications || 'Cabinets, Wardrobes & Interior Joinery';
    const finish = item.finish || 'Premium Finish';
    const desc = item.desc || `High quality ${item.name} supplied by Rab A Golden Heritage.`;
    const encodedEnquiry = encodeURIComponent(`Hello Rab A Golden Heritage, I would like to enquire about availability and wholesale quotation for "${item.name}". Please provide details.`);

    return `
      <article class="youceef-card" data-id="${item.id}" data-name="${item.name}">
        <!-- Visual Banner with Gradient Overlay & Floating Badges -->
        <div class="youceef-card-visual">
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
          <div class="youceef-visual-overlay"></div>
          <span class="youceef-cat-badge">${item.catLabel || 'Material'}</span>
          <div class="youceef-stock-badge">
            <span class="youceef-stock-pulse"></span>
            <span>In Stock</span>
          </div>
          <button class="youceef-quickview-btn btn-view-product" data-product="${item.name}" data-cat="${item.catLabel}" data-img="${item.image}" title="Quick View">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            <span>Quick View</span>
          </button>
        </div>

        <!-- Card Body -->
        <div class="youceef-card-body">
          <div class="youceef-title-row">
            <h3 class="youceef-card-title">${item.name}</h3>
            <span class="youceef-finish-tag">✨ ${finish}</span>
          </div>

          <p class="youceef-card-desc">${desc}</p>

          <!-- Key Application Specification -->
          <ul class="youceef-specs-list">
            <li class="youceef-spec-item">
              <span class="youceef-spec-dot"></span>
              <strong class="youceef-spec-key">Applications:</strong>
              <span class="youceef-spec-val" title="${app}">${app}</span>
            </li>
          </ul>
        </div>

        <!-- Card Footer: Direct Enquire Button Only -->
        <div class="youceef-card-footer">
          <a href="https://wa.me/2348138781961?text=${encodedEnquiry}" target="_blank" rel="noopener noreferrer" class="btn-youceef-enquire" aria-label="Enquire for ${item.name} on WhatsApp">
            <span>Enquire on WhatsApp</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.071.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/></svg>
          </a>
        </div>
      </article>
    `;
  };

  const createYouceefListCard = (item) => {
    const app = item.applications || 'Cabinets, Wardrobes & Interior Joinery';
    const finish = item.finish || 'Premium Finish';
    const desc = item.desc || `High quality ${item.name} supplied by Rab A Golden Heritage.`;
    const encodedEnquiry = encodeURIComponent(`Hello Rab A Golden Heritage, I would like to enquire about availability and wholesale quotation for "${item.name}". Please provide details.`);

    return `
      <article class="youceef-list-card" data-id="${item.id}" data-name="${item.name}">
        <!-- Visual Box -->
        <div class="youceef-list-img-box">
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
          <span class="youceef-cat-badge">${item.catLabel || 'Material'}</span>
          <div class="youceef-stock-badge">
            <span class="youceef-stock-pulse"></span>
            <span>In Stock</span>
          </div>
          <button class="youceef-quickview-btn btn-view-product" data-product="${item.name}" data-cat="${item.catLabel}" data-img="${item.image}" title="Quick View">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            <span>Quick View</span>
          </button>
        </div>

        <!-- Center Content Box -->
        <div class="youceef-list-content">
          <div class="youceef-title-row">
            <h3 class="youceef-card-title" style="font-size: 20px;">${item.name}</h3>
            <span class="youceef-finish-tag">✨ ${finish}</span>
          </div>

          <p class="youceef-card-desc" style="-webkit-line-clamp: 3;">${desc}</p>

          <!-- Key Application Specification -->
          <ul class="youceef-specs-list" style="margin-bottom: 0;">
            <li class="youceef-spec-item">
              <span class="youceef-spec-dot"></span>
              <strong class="youceef-spec-key">Applications:</strong>
              <span class="youceef-spec-val">${app}</span>
            </li>
          </ul>
        </div>

        <!-- Right Actions Column: Direct Enquire Button Only -->
        <div class="youceef-list-actions-col">
          <a href="https://wa.me/2348138781961?text=${encodedEnquiry}" target="_blank" rel="noopener noreferrer" class="btn-youceef-enquire" style="width: 100%;" aria-label="Enquire for ${item.name} on WhatsApp">
            <span>Enquire on WhatsApp</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.071.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/></svg>
          </a>
        </div>
      </article>
    `;
  };

  window.createYouceefCard = createYouceefCard;
  window.createYouceefListCard = createYouceefListCard;

  const renderCatalogueItems = (categoryFilter = 'all') => {
    if (!catalogueItemsGrid) return;

    const filtered = categoryFilter === 'all' 
      ? STORE_INVENTORY 
      : STORE_INVENTORY.filter(i => i.category === categoryFilter);

    catalogueItemsGrid.innerHTML = filtered.map(item => createYouceefCard(item)).join('');
  };

  const openCatalogueModal = (filter = 'all') => {
    cataloguePills.forEach(p => {
      if (p.getAttribute('data-cat') === filter) {
        p.classList.add('active');
      } else {
        p.classList.remove('active');
      }
    });

    renderCatalogueItems(filter);
    catalogueModal?.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  };

  const closeCatalogueModal = () => {
    catalogueModal?.classList.remove('is-active');
    document.body.style.overflow = '';
  };

  if (openCatalogueBtn) openCatalogueBtn.addEventListener('click', () => openCatalogueModal('all'));
  if (viewAllCategoriesBtn) {
    viewAllCategoriesBtn.addEventListener('click', (e) => {
      // If we are on index.html, allow navigation to inventory.html or open modal
      if (window.location.pathname.includes('inventory.html')) {
        e.preventDefault();
      }
    });
  }
  if (filterBoardsBtn) {
    filterBoardsBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openCatalogueModal('mdf');
    });
  }
  if (filterAccBtn) {
    filterAccBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openCatalogueModal('edge');
    });
  }
  if (closeCatalogueModalBtn) closeCatalogueModalBtn.addEventListener('click', closeCatalogueModal);
  if (catalogueModal) {
    catalogueModal.addEventListener('click', (e) => {
      if (e.target === catalogueModal) closeCatalogueModal();
    });
  }

  // Filter pills click inside catalogue
  cataloguePills.forEach(pill => {
    pill.addEventListener('click', () => {
      cataloguePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const cat = pill.getAttribute('data-cat');
      renderCatalogueItems(cat);
    });
  });

  // --------------------------------------------------------------------------
  // 5. Category Box Click (in "Shop by Category" section)
  // --------------------------------------------------------------------------
  const categoryBoxes = document.querySelectorAll('.category-box');
  categoryBoxes.forEach(box => {
    box.addEventListener('click', () => {
      const cat = box.getAttribute('data-category');
      // Navigate cleanly to the dedicated inventory page with the category active!
      window.location.href = `inventory.html?cat=${cat || 'all'}`;
    });
  });

  // --------------------------------------------------------------------------
  // 6. Header Search Bar (Handles enter and redirects if on homepage)
  // --------------------------------------------------------------------------
  const searchInput = document.getElementById('search-input');
  const searchBtn = document.getElementById('search-btn');
  const mobileSearchInput = document.getElementById('mobile-search-input');
  const mobileSearchBtn = document.getElementById('mobile-search-btn');

  const executeHeaderSearch = (term) => {
    const q = term.trim();
    if (!q) return;

    if (window.location.pathname.includes('inventory.html')) {
      // Already on inventory page, sync with inventory search input
      const invSearch = document.getElementById('inv-search-input');
      if (invSearch) {
        invSearch.value = q;
        invSearch.dispatchEvent(new Event('input'));
        invSearch.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      // Redirect to dedicated inventory page with search parameter!
      window.location.href = `inventory.html?search=${encodeURIComponent(q)}`;
    }
  };

  if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') executeHeaderSearch(searchInput.value);
    });
  }
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      executeHeaderSearch(searchInput.value);
    });
  }
  if (mobileSearchInput) {
    mobileSearchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') executeHeaderSearch(mobileSearchInput.value);
    });
  }
  if (mobileSearchBtn) {
    mobileSearchBtn.addEventListener('click', () => {
      executeHeaderSearch(mobileSearchInput.value);
    });
  }

  // --------------------------------------------------------------------------
  // 7. Homepage Slider Buttons
  // --------------------------------------------------------------------------
  const boardsPrevBtn = document.getElementById('boards-prev-btn');
  const boardsNextBtn = document.getElementById('boards-next-btn');
  const accPrevBtn = document.getElementById('acc-prev-btn');
  const accNextBtn = document.getElementById('acc-next-btn');

  const boardsGrid = document.getElementById('boards-grid');
  const accGrid = document.getElementById('accessories-grid');

  if (boardsNextBtn && boardsGrid) {
    boardsNextBtn.addEventListener('click', () => {
      boardsGrid.scrollBy({ left: 280, behavior: 'smooth' });
    });
  }
  if (boardsPrevBtn && boardsGrid) {
    boardsPrevBtn.addEventListener('click', () => {
      boardsGrid.scrollBy({ left: -280, behavior: 'smooth' });
    });
  }
  if (accNextBtn && accGrid) {
    accNextBtn.addEventListener('click', () => {
      accGrid.scrollBy({ left: 280, behavior: 'smooth' });
    });
  }
  if (accPrevBtn && accGrid) {
    accPrevBtn.addEventListener('click', () => {
      accGrid.scrollBy({ left: -280, behavior: 'smooth' });
    });
  }

  // --------------------------------------------------------------------------
  // 8. Mobile Menu Drawer Toggle
  // --------------------------------------------------------------------------
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileNavMenu = document.getElementById('mobile-nav-menu');

  if (mobileMenuToggle && mobileNavMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      const isOpen = mobileNavMenu.classList.toggle('is-open');
      mobileMenuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    mobileNavMenu.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileNavMenu.classList.remove('is-open');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --------------------------------------------------------------------------
  // 9. Dedicated Store Inventory Page (inventory.html Controller)
  // --------------------------------------------------------------------------
  const invDisplayContainer = document.getElementById('inventory-display-container');
  const invSearchInput = document.getElementById('inv-search-input');
  const invSearchClear = document.getElementById('inv-search-clear');
  const invResultsCount = document.getElementById('inv-results-count');
  const invCategoryPills = document.querySelectorAll('.inv-pill');
  const viewGridBtn = document.getElementById('view-grid-btn');
  const viewListBtn = document.getElementById('view-list-btn');

  if (invDisplayContainer) {
    // Dynamic Sticky Offset & Elevation for the Filter & Search Toolbar Card
    const toolbarSection = document.getElementById('inventory-toolbar-section');
    const siteHeader = document.getElementById('site-header');

    const updateToolbarStickyOffset = () => {
      if (toolbarSection && siteHeader) {
        const headerHeight = siteHeader.offsetHeight;
        toolbarSection.style.top = `${headerHeight - 1}px`;
      }
    };

    if (toolbarSection) {
      updateToolbarStickyOffset();
      window.addEventListener('resize', updateToolbarStickyOffset);

      window.addEventListener('scroll', () => {
        if (window.scrollY > 150) {
          toolbarSection.classList.add('is-stuck');
        } else {
          toolbarSection.classList.remove('is-stuck');
        }
      }, { passive: true });
    }

    let currentCategory = 'all';
    let currentSearchTerm = '';
    let currentLayoutView = 'grid'; // 'grid' | 'list'

    // Parse URL query parameter: e.g. inventory.html?cat=mdf or ?search=wenge
    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get('cat');
    const searchParam = urlParams.get('search') || urlParams.get('q');

    if (catParam) {
      currentCategory = catParam.toLowerCase();
      invCategoryPills.forEach(p => {
        if (p.getAttribute('data-cat') === currentCategory) {
          p.classList.add('active');
        } else {
          p.classList.remove('active');
        }
      });
    }

    if (searchParam && invSearchInput) {
      currentSearchTerm = searchParam.trim().toLowerCase();
      invSearchInput.value = searchParam.trim();
      invSearchClear?.classList.add('show');
    }

    // View toggle event listeners
    if (viewGridBtn && viewListBtn) {
      viewGridBtn.addEventListener('click', () => {
        currentLayoutView = 'grid';
        viewGridBtn.classList.add('active');
        viewListBtn.classList.remove('active');
        invDisplayContainer.className = 'inventory-spacious-grid';
        renderInventoryPage();
      });

      viewListBtn.addEventListener('click', () => {
        currentLayoutView = 'list';
        viewListBtn.classList.add('active');
        viewGridBtn.classList.remove('active');
        invDisplayContainer.className = 'inventory-detailed-list';
        renderInventoryPage();
      });
    }

    // Category pills click
    invCategoryPills.forEach(pill => {
      pill.addEventListener('click', () => {
        invCategoryPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        currentCategory = pill.getAttribute('data-cat');
        renderInventoryPage();
      });
    });

    // Search input
    if (invSearchInput) {
      invSearchInput.addEventListener('input', (e) => {
        currentSearchTerm = e.target.value.trim().toLowerCase();
        if (invSearchClear) {
          if (currentSearchTerm.length > 0) {
            invSearchClear.classList.add('show');
          } else {
            invSearchClear.classList.remove('show');
          }
        }
        renderInventoryPage();
      });
    }

    if (invSearchClear) {
      invSearchClear.addEventListener('click', () => {
        if (invSearchInput) invSearchInput.value = '';
        currentSearchTerm = '';
        invSearchClear.classList.remove('show');
        renderInventoryPage();
      });
    }

    // --------------------------------------------------------------------------
    // Modish Standard Product Card Component Helpers (Replicated for Store Inventory)
    // Ref: https://www.modishstandard.com/
    // --------------------------------------------------------------------------
    const createModishCard = (item) => {
      const desc = item.desc || item.applications || `High quality ${item.name} supplied by Rab A Golden Heritage.`;
      const finish = item.finish ? `<span class="modish-finish-badge">✨ ${item.finish}</span>` : '';
      const encodedOrder = encodeURIComponent(`Hello Rab A Golden Heritage, I would like to order / request quotation for: *${item.name}* (${item.catLabel || 'Material'}). Please confirm availability and pricing.`);

      return `
        <article class="modish-card" data-id="${item.id}" data-name="${item.name}">
          <!-- 4:3 Aspect Ratio Media Box with Hover Zoom & Floating Wishlist Heart -->
          <div class="modish-card-media btn-view-product" data-product="${item.name}" title="Click to view details">
            <img src="${item.image}" alt="${item.name}" loading="lazy" class="modish-img" />
            <button type="button" class="modish-fav-btn" data-id="${item.id}" data-name="${item.name}" aria-label="Save to favourites" title="Save to favourites">
              <svg class="modish-heart-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
            <div class="modish-view-chip">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              <span>Quick View</span>
            </div>
          </div>

          <!-- Modish Card Body -->
          <div class="modish-card-body">
            <div class="modish-card-info">
              <span class="modish-card-cat">${item.catLabel || 'MATERIAL'}</span>
              <h3 class="modish-card-title btn-view-product" data-product="${item.name}" title="${item.name}">${item.name}</h3>
              ${finish}
              <p class="modish-card-desc" title="${desc}">${desc}</p>
              
              <div class="modish-meta-row">
                <div class="modish-price-group">
                  <span class="modish-price-sub">WHOLESALE</span>
                  <span class="modish-price-val">Quotation on Request</span>
                </div>
                <div class="modish-stock-badge">
                  <span class="modish-stock-dot"></span>
                  <span>In Stock</span>
                </div>
              </div>
            </div>

            <!-- Modish Dual Action Buttons -->
            <div class="modish-card-actions">
              <a href="https://wa.me/2348138781961?text=${encodedOrder}" target="_blank" rel="noopener noreferrer" class="btn-modish-whatsapp" aria-label="Order ${item.name} via WhatsApp">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.071.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/>
                </svg>
                <span>Order via WhatsApp</span>
              </a>
              <button type="button" class="btn-modish-orderlist modish-add-btn" data-id="${item.id}" aria-label="Add ${item.name} to Order List">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                  <path d="M12 5v14M5 12h14"/>
                </svg>
                <span>Add to Order List</span>
              </button>
            </div>
          </div>
        </article>
      `;
    };

    const createModishListCard = (item) => {
      const desc = item.desc || item.applications || `High quality ${item.name} supplied by Rab A Golden Heritage.`;
      const finish = item.finish ? `<span class="modish-finish-badge">✨ ${item.finish}</span>` : '';
      const encodedOrder = encodeURIComponent(`Hello Rab A Golden Heritage, I would like to order / request quotation for: *${item.name}* (${item.catLabel || 'Material'}). Please confirm availability and pricing.`);

      return `
        <article class="modish-list-card" data-id="${item.id}" data-name="${item.name}">
          <!-- 4:3 Media Box -->
          <div class="modish-list-media btn-view-product" data-product="${item.name}" title="Click to view details">
            <img src="${item.image}" alt="${item.name}" loading="lazy" class="modish-img" />
            <button type="button" class="modish-fav-btn" data-id="${item.id}" data-name="${item.name}" aria-label="Save to favourites" title="Save to favourites">
              <svg class="modish-heart-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
            <div class="modish-view-chip">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              <span>Quick View</span>
            </div>
          </div>

          <!-- Middle Content -->
          <div class="modish-list-info">
            <div class="modish-list-meta-top">
              <span class="modish-card-cat">${item.catLabel || 'MATERIAL'}</span>
              <div class="modish-stock-badge">
                <span class="modish-stock-dot"></span>
                <span>In Stock</span>
              </div>
            </div>
            <h3 class="modish-card-title btn-view-product" data-product="${item.name}" title="${item.name}">${item.name}</h3>
            ${finish}
            <p class="modish-card-desc" style="-webkit-line-clamp: 2;" title="${desc}">${desc}</p>
            <div class="modish-price-group" style="margin-top: 6px;">
              <span class="modish-price-sub">WHOLESALE SPECIFICATION</span>
              <span class="modish-price-val" style="font-size: 14px;">Quotation on Request &bull; Delivery Across Nigeria</span>
            </div>
          </div>

          <!-- Right Actions Column -->
          <div class="modish-list-actions">
            <a href="https://wa.me/2348138781961?text=${encodedOrder}" target="_blank" rel="noopener noreferrer" class="btn-modish-whatsapp" aria-label="Order ${item.name} via WhatsApp">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.071.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/>
              </svg>
              <span>Order via WhatsApp</span>
            </a>
            <button type="button" class="btn-modish-orderlist modish-add-btn" data-id="${item.id}" aria-label="Add ${item.name} to Order List">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <path d="M12 5v14M5 12h14"/>
              </svg>
              <span>Add to Order List</span>
            </button>
          </div>
        </article>
      `;
    };

    window.createModishCard = createModishCard;
    window.createModishListCard = createModishListCard;

    // Main render function for dedicated inventory page
    const renderInventoryPage = () => {
      let filtered = STORE_INVENTORY;

      // Filter by Category
      if (currentCategory !== 'all') {
        filtered = filtered.filter(item => item.category === currentCategory);
      }

      // Filter by Search Term
      if (currentSearchTerm) {
        filtered = filtered.filter(item => 
          item.name.toLowerCase().includes(currentSearchTerm) ||
          item.catLabel.toLowerCase().includes(currentSearchTerm) ||
          (item.finish && item.finish.toLowerCase().includes(currentSearchTerm)) ||
          (item.desc && item.desc.toLowerCase().includes(currentSearchTerm)) ||
          (item.applications && item.applications.toLowerCase().includes(currentSearchTerm))
        );
      }

      // Update Results Count
      if (invResultsCount) {
        const catMap = {
          'all': 'All Items',
          'mdf': 'MDF Boards',
          'blockboard': 'Blockboard (B/B)',
          'wallpanel': 'Wall Panels',
          'special': 'Special Boards',
          'edge': 'Edge Banding',
          'handles': 'Handles',
          'drawer': 'Drawer Hardware',
          'hinges': 'Hinges & Brackets',
          'locks': 'Locks & Keys',
          'screws': 'Screws',
          'adhesives': 'Adhesives',
          'workshop': 'Workshop Tools'
        };
        const catName = catMap[currentCategory] || 'Selected Category';
        invResultsCount.textContent = `Showing ${filtered.length} of ${STORE_INVENTORY.length} items (${catName})`;
      }

      if (filtered.length === 0) {
        invDisplayContainer.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background-color: #ffffff; border-radius: 14px; border: 1px solid var(--border-light);">
            <div style="font-size: 42px; margin-bottom: 12px;">🔍</div>
            <h3 style="font-size: 20px; font-weight: 800; color: #2a1508; margin-bottom: 8px;">No products found matching your filter</h3>
            <p style="font-size: 14px; color: #7a6555; max-width: 480px; margin: 0 auto 20px auto;">We have over 39 items in stock including all 19 varieties of MDF and decorative Wall Panels. Try clearing your search or switching categories.</p>
            <button id="reset-inv-filter-btn" class="btn btn-hero-dark" style="margin: 0 auto;">View All 39 Products</button>
          </div>
        `;
        document.getElementById('reset-inv-filter-btn')?.addEventListener('click', () => {
          if (invSearchInput) invSearchInput.value = '';
          currentSearchTerm = '';
          invSearchClear?.classList.remove('show');
          currentCategory = 'all';
          invCategoryPills.forEach(p => {
            if (p.getAttribute('data-cat') === 'all') p.classList.add('active');
            else p.classList.remove('active');
          });
          renderInventoryPage();
        });
        return;
      }

      if (currentLayoutView === 'grid') {
        // Modish Standard Product Card Grid
        invDisplayContainer.innerHTML = filtered.map(item => createModishCard(item)).join('');
      } else {
        // Modish Standard Product Card List Row
        invDisplayContainer.innerHTML = filtered.map(item => createModishListCard(item)).join('');
      }

      // Attach event listeners for Modish buttons (Add to Order List, Favourites, Quick View)
      attachInventoryCardListeners();
    };

    const attachInventoryCardListeners = () => {
      // Add to Order List Button
      invDisplayContainer.querySelectorAll('.modish-add-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const id = btn.getAttribute('data-id');
          const item = STORE_INVENTORY.find(i => i.id === id);

          if (item) {
            addItemToCart(item, 1);
            btn.innerHTML = `<span>Added to Order List ✓</span>`;
            btn.style.backgroundColor = '#EEF2FF';
            btn.style.borderColor = '#1B2D72';
            btn.style.color = '#1B2D72';
            setTimeout(() => {
              btn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 5v14M5 12h14"/></svg><span>Add to Order List</span>`;
              btn.style.backgroundColor = '';
              btn.style.borderColor = '';
              btn.style.color = '';
            }, 1600);
          }
        });
      });

      // Wishlist / Favourite Heart Toggle
      invDisplayContainer.querySelectorAll('.modish-fav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          btn.classList.toggle('active');
          const isFav = btn.classList.contains('active');
          const itemName = btn.getAttribute('data-name') || 'Item';
          if (isFav) {
            showToast(`Saved "${itemName}" to favourites ❤️`);
          } else {
            showToast(`Removed "${itemName}" from favourites`);
          }
        });
      });

      // Quick View Triggers (clicking on media card or title)
      invDisplayContainer.querySelectorAll('.btn-view-product').forEach(btn => {
        btn.addEventListener('click', (e) => {
          if (e.target.closest('.modish-fav-btn') || e.target.closest('.btn-modish-whatsapp') || e.target.closest('.modish-add-btn')) {
            return;
          }
          const name = btn.getAttribute('data-product');
          const item = STORE_INVENTORY.find(i => i.name === name);
          if (item) {
            openProductModal(item);
          }
        });
      });
    };

    // Initial render of dedicated inventory page
    renderInventoryPage();
  }

  // --------------------------------------------------------------------------
  // 8. Custom Board Cutting & Edge Banding Quote Request Controller
  // --------------------------------------------------------------------------
  const initCuttingService = () => {
    const cutBoardSelect = document.getElementById('cut-board-select');
    const cutThicknessSelect = document.getElementById('cut-thickness-select');
    const cutEdgetapeSelect = document.getElementById('cut-edgetape-select');
    const cutlistTbody = document.getElementById('cutlist-tbody');
    const btnAddCutRow = document.getElementById('btn-add-cut-row');
    const btnClearCuts = document.getElementById('btn-clear-cuts');
    const btnSubmitWhatsapp = document.getElementById('btn-submit-cutting-whatsapp');
    const btnCopyCutlist = document.getElementById('btn-copy-cutlist');
    const btnPrintCutlist = document.getElementById('btn-print-cutlist');
    const btnAddBoardsCart = document.getElementById('btn-add-boards-cart');

    const calcTotalPieces = document.getElementById('calc-total-pieces');
    const calcTotalArea = document.getElementById('calc-total-area');
    const calcEstSheets = document.getElementById('calc-est-sheets');
    const calcTotalEdgetape = document.getElementById('calc-total-edgetape');

    const cutSpecialNotes = document.getElementById('cut-special-notes');
    const cutCustomerName = document.getElementById('cut-customer-name');

    if (!cutlistTbody) return;

    // Initial default cut schedule
    let cutPieces = [
      { id: 1, label: 'Wardrobe Doors', length: 2020, width: 590, qty: 2, edges: 'all4' },
      { id: 2, label: 'Wardrobe Sides (Gables)', length: 2100, width: 580, qty: 2, edges: '1long' },
      { id: 3, label: 'Top & Bottom Panels', length: 1164, width: 580, qty: 2, edges: '1long' },
      { id: 4, label: 'Internal Shelves', length: 1164, width: 550, qty: 3, edges: '1long' }
    ];

    const PRESETS = {
      wardrobe: [
        { id: 1, label: 'Wardrobe Doors', length: 2020, width: 590, qty: 2, edges: 'all4' },
        { id: 2, label: 'Wardrobe Sides (Gables)', length: 2100, width: 580, qty: 2, edges: '1long' },
        { id: 3, label: 'Top & Bottom Panels', length: 1164, width: 580, qty: 2, edges: '1long' },
        { id: 4, label: 'Internal Shelves', length: 1164, width: 550, qty: 3, edges: '1long' }
      ],
      kitchen: [
        { id: 1, label: 'Cabinet Doors', length: 715, width: 295, qty: 2, edges: 'all4' },
        { id: 2, label: 'Base Side Panels', length: 720, width: 560, qty: 2, edges: '1long' },
        { id: 3, label: 'Base Bottom Deck', length: 564, width: 560, qty: 1, edges: '1long' },
        { id: 4, label: 'Top Stretcher Rails', length: 564, width: 100, qty: 2, edges: '1long' },
        { id: 5, label: 'Adjustable Shelf', length: 562, width: 520, qty: 1, edges: '1long' }
      ],
      credenza: [
        { id: 1, label: 'Executive Desk Top', length: 1600, width: 750, qty: 1, edges: 'all4' },
        { id: 2, label: 'Side Support Legs', length: 730, width: 700, qty: 2, edges: 'all4' },
        { id: 3, label: 'Modesty Front Panel', length: 1400, width: 400, qty: 1, edges: '2long' },
        { id: 4, label: 'Drawer Unit Pedestal', length: 650, width: 450, qty: 2, edges: '1long' }
      ]
    };

    // Calculate metrics
    const recalcMetrics = () => {
      let totalPcs = 0;
      let totalAreaSqM = 0;
      let totalEdgeMeters = 0;

      cutPieces.forEach(p => {
        const qty = parseInt(p.qty, 10) || 0;
        const lengthMm = parseFloat(p.length) || 0;
        const widthMm = parseFloat(p.width) || 0;

        totalPcs += qty;

        const pieceAreaSqM = (lengthMm * widthMm) / 1000000;
        totalAreaSqM += pieceAreaSqM * qty;

        // Edge Banding length per piece
        let edgeLengthMm = 0;
        switch (p.edges) {
          case 'all4':
            edgeLengthMm = (lengthMm * 2) + (widthMm * 2);
            break;
          case '2long':
            edgeLengthMm = lengthMm * 2;
            break;
          case '1long1short':
            edgeLengthMm = lengthMm + widthMm;
            break;
          case '1long':
            edgeLengthMm = lengthMm;
            break;
          case 'none':
          default:
            edgeLengthMm = 0;
            break;
        }
        totalEdgeMeters += (edgeLengthMm / 1000) * qty;
      });

      // Standard full sheet area: 1.22m * 2.44m = 2.9768 m²
      // Add 15% allowance for blade kerf & cut pattern optimization
      const sheetArea = 2.9768;
      const estSheets = totalAreaSqM > 0 ? Math.ceil((totalAreaSqM * 1.15) / sheetArea) : 0;

      if (calcTotalPieces) calcTotalPieces.textContent = `${totalPcs} pcs`;
      if (calcTotalArea) calcTotalArea.textContent = `${totalAreaSqM.toFixed(2)} m²`;
      if (calcEstSheets) calcEstSheets.textContent = `${estSheets} Sheets (4×8ft)`;
      if (calcTotalEdgetape) calcTotalEdgetape.textContent = `${totalEdgeMeters.toFixed(1)} m`;

      return { totalPcs, totalAreaSqM, estSheets, totalEdgeMeters };
    };

    // Render Cut Pieces Table
    const renderCutRows = () => {
      if (cutPieces.length === 0) {
        cutlistTbody.innerHTML = `
          <tr>
            <td colspan="7" style="text-align: center; padding: 32px 14px; color: var(--warm-brown-medium);">
              No pieces added yet. Click <strong>"+ Add Another Cut Piece"</strong> or load a preset above to start your cut list.
            </td>
          </tr>
        `;
        recalcMetrics();
        return;
      }

      cutlistTbody.innerHTML = cutPieces.map((piece, idx) => `
        <tr data-id="${piece.id}">
          <td class="cut-row-index">${idx + 1}</td>
          <td>
            <input 
              type="text" 
              class="cut-input-text cut-field-label" 
              data-id="${piece.id}" 
              data-field="label" 
              value="${piece.label || ''}" 
              placeholder="e.g. Door, Shelf, Side Gable" 
            />
          </td>
          <td>
            <input 
              type="number" 
              class="cut-input-num cut-field-length" 
              data-id="${piece.id}" 
              data-field="length" 
              value="${piece.length || ''}" 
              min="10" 
              max="2440" 
              step="1" 
              placeholder="2000" 
            />
          </td>
          <td>
            <input 
              type="number" 
              class="cut-input-num cut-field-width" 
              data-id="${piece.id}" 
              data-field="width" 
              value="${piece.width || ''}" 
              min="10" 
              max="1220" 
              step="1" 
              placeholder="450" 
            />
          </td>
          <td>
            <input 
              type="number" 
              class="cut-qty-input cut-field-qty" 
              data-id="${piece.id}" 
              data-field="qty" 
              value="${piece.qty || 1}" 
              min="1" 
              max="500" 
              step="1" 
            />
          </td>
          <td>
            <select class="edge-tape-select cut-field-edges" data-id="${piece.id}" data-field="edges">
              <option value="all4" ${piece.edges === 'all4' ? 'selected' : ''}>All 4 Edges (L + W)</option>
              <option value="2long" ${piece.edges === '2long' ? 'selected' : ''}>2 Long Edges (Length)</option>
              <option value="1long1short" ${piece.edges === '1long1short' ? 'selected' : ''}>1 Long + 1 Short</option>
              <option value="1long" ${piece.edges === '1long' ? 'selected' : ''}>1 Long Edge (Front)</option>
              <option value="none" ${piece.edges === 'none' ? 'selected' : ''}>No Taping (Raw)</option>
            </select>
          </td>
          <td style="text-align: center;">
            <button type="button" class="btn-remove-row" data-id="${piece.id}" aria-label="Remove cut row" title="Remove piece">&times;</button>
          </td>
        </tr>
      `).join('');

      // Attach event listeners to inputs
      cutlistTbody.querySelectorAll('input, select').forEach(el => {
        el.addEventListener('input', (e) => {
          const id = parseInt(e.target.getAttribute('data-id'), 10);
          const field = e.target.getAttribute('data-field');
          const val = e.target.value;

          const p = cutPieces.find(item => item.id === id);
          if (p) {
            p[field] = (field === 'length' || field === 'width' || field === 'qty') ? (parseFloat(val) || 0) : val;
            recalcMetrics();
          }
        });
      });

      // Remove row buttons
      cutlistTbody.querySelectorAll('.btn-remove-row').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = parseInt(btn.getAttribute('data-id'), 10);
          cutPieces = cutPieces.filter(item => item.id !== id);
          renderCutRows();
        });
      });

      recalcMetrics();
    };

    // Add new piece
    if (btnAddCutRow) {
      btnAddCutRow.addEventListener('click', () => {
        cutPieces.push({
          id: Date.now(),
          label: '',
          length: 1000,
          width: 500,
          qty: 1,
          edges: '1long'
        });
        renderCutRows();
        const inputs = cutlistTbody.querySelectorAll('.cut-field-label');
        if (inputs.length > 0) inputs[inputs.length - 1].focus();
      });
    }

    // Presets buttons
    document.querySelectorAll('.btn-preset[data-preset]').forEach(btn => {
      btn.addEventListener('click', () => {
        const presetKey = btn.getAttribute('data-preset');
        if (PRESETS[presetKey]) {
          cutPieces = JSON.parse(JSON.stringify(PRESETS[presetKey]));
          renderCutRows();
          showToast(`Loaded ${btn.textContent.trim()} template!`);
        }
      });
    });

    if (btnClearCuts) {
      btnClearCuts.addEventListener('click', () => {
        if (confirm('Are you sure you want to clear all cut pieces?')) {
          cutPieces = [];
          renderCutRows();
        }
      });
    }

    // Global helper to select board in cutting tool
    window.selectBoardInCuttingTool = (boardName) => {
      if (!cutBoardSelect) return;
      const cleanName = boardName.toLowerCase().trim();
      let matchedOpt = null;

      for (let opt of cutBoardSelect.options) {
        if (opt.value.toLowerCase().includes(cleanName) || cleanName.includes(opt.value.toLowerCase().replace(' mdf', '').replace(' blockboard', ''))) {
          matchedOpt = opt;
          break;
        }
      }

      if (matchedOpt) {
        cutBoardSelect.value = matchedOpt.value;
      }
      showToast(`Selected "${cutBoardSelect.value}" for cutting!`);
    };

    // Format cutting schedule text for WhatsApp / Clipboard / Print
    const formatCuttingScheduleText = () => {
      const board = cutBoardSelect ? cutBoardSelect.value : 'MDF Board';
      const thickness = cutThicknessSelect ? cutThicknessSelect.value : '18mm';
      const edgeTape = cutEdgetapeSelect ? cutEdgetapeSelect.value : '1mm Matching PVC';
      const notes = cutSpecialNotes ? cutSpecialNotes.value.trim() : '';
      const customer = cutCustomerName ? cutCustomerName.value.trim() : '';
      const metrics = recalcMetrics();

      let text = `📋 *RAB A GOLDEN HERITAGE — CUTTING & EDGE BANDING REQUEST*\n`;
      text += `---------------------------------------------------\n`;
      text += `🪵 *Board Material:* ${board}\n`;
      text += `📏 *Thickness:* ${thickness}\n`;
      text += `📐 *Sheet Dimension:* Standard 4ft × 8ft (1220 × 2440mm)\n`;
      text += `🧵 *Default Edge Taping:* ${edgeTape}\n`;
      if (customer) {
        text += `👤 *Client / Workshop:* ${customer}\n`;
      }
      text += `\n✂️ *CUTTING SCHEDULE (${cutPieces.length} items, ${metrics.totalPcs} total pcs):*\n`;

      cutPieces.forEach((p, idx) => {
        let edgeText = 'None';
        switch (p.edges) {
          case 'all4': edgeText = 'All 4 Edges'; break;
          case '2long': edgeText = '2 Long Edges'; break;
          case '1long1short': edgeText = '1 Long + 1 Short'; break;
          case '1long': edgeText = '1 Long Edge'; break;
          default: edgeText = 'No Taping (Raw)'; break;
        }
        text += `${idx + 1}. ${p.label || 'Piece ' + (idx + 1)}: ${p.length}mm × ${p.width}mm (Qty: ${p.qty}) | Taping: ${edgeText}\n`;
      });

      text += `\n📊 *ESTIMATED WORKSHOP REQUIREMENTS:*\n`;
      text += `• Total Cut Pieces: ${metrics.totalPcs} pcs\n`;
      text += `• Total Surface Area: ${metrics.totalAreaSqM.toFixed(2)} m²\n`;
      text += `• Est. Full Sheets Needed: ${metrics.estSheets} Sheet(s) (4×8ft)\n`;
      text += `• Est. Edge Banding Needed: ${metrics.totalEdgeMeters.toFixed(1)} linear meters\n`;

      if (notes) {
        text += `\n📝 *Special Instructions / Grain Alignment:*\n${notes}\n`;
      }

      text += `\nPlease provide your wholesale quotation for the boards, precision cutting, and edge banding service. Thank you!`;
      return text;
    };

    // WhatsApp Submission
    if (btnSubmitWhatsapp) {
      btnSubmitWhatsapp.addEventListener('click', () => {
        if (cutPieces.length === 0) {
          alert('Please add at least one cut piece before submitting.');
          return;
        }
        const text = formatCuttingScheduleText();
        const encoded = encodeURIComponent(text);
        window.open(`https://wa.me/2348138781961?text=${encoded}`, '_blank');
      });
    }

    // Copy to Clipboard
    if (btnCopyCutlist) {
      btnCopyCutlist.addEventListener('click', () => {
        if (cutPieces.length === 0) {
          alert('Cut list is empty.');
          return;
        }
        const text = formatCuttingScheduleText();
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(() => {
            showToast('Cutting schedule copied to clipboard! ✓');
          }).catch(() => {
            prompt('Copy your cutting schedule below:', text);
          });
        } else {
          prompt('Copy your cutting schedule below:', text);
        }
      });
    }

    // Print Cut Sheet
    if (btnPrintCutlist) {
      btnPrintCutlist.addEventListener('click', () => {
        if (cutPieces.length === 0) {
          alert('Cut list is empty.');
          return;
        }
        const board = cutBoardSelect ? cutBoardSelect.value : 'MDF Board';
        const thickness = cutThicknessSelect ? cutThicknessSelect.value : '18mm';
        const edgeTape = cutEdgetapeSelect ? cutEdgetapeSelect.value : '1mm Matching PVC';
        const notes = cutSpecialNotes ? cutSpecialNotes.value.trim() : '';
        const customer = cutCustomerName ? cutCustomerName.value.trim() : '';
        const metrics = recalcMetrics();

        const printWindow = window.open('', '_blank', 'width=850,height=900');
        if (!printWindow) {
          alert('Please allow pop-ups to print the cut sheet.');
          return;
        }

        printWindow.document.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>Rab A Golden Heritage — Cut Sheet (${board})</title>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 30px; color: #150c08; line-height: 1.4; }
              .header { border-bottom: 2px solid #2a1508; padding-bottom: 14px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: flex-end; }
              .brand { font-size: 24px; font-weight: 800; color: #2a1508; }
              .brand span { color: #8b5e3c; }
              .subtitle { font-size: 13px; color: #5a4535; }
              .meta-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; background: #faf7f4; padding: 14px; border: 1px solid #ede5da; border-radius: 8px; margin-bottom: 22px; font-size: 13px; }
              table { width: 100%; border-collapse: collapse; margin-bottom: 22px; font-size: 13px; }
              th, td { border: 1px solid #d4c5b0; padding: 9px 12px; text-align: left; }
              th { background: #2a1508; color: #ffffff; text-transform: uppercase; font-size: 11px; }
              .summary-box { background: #f9f5f1; border: 1.5px solid #c4a265; border-radius: 8px; padding: 14px; margin-bottom: 18px; font-size: 13px; }
              .summary-box strong { color: #2a1508; font-size: 14px; }
              .notes { font-size: 12px; color: #5a4535; border-left: 3px solid #8b5e3c; padding-left: 10px; margin-top: 15px; }
              .footer { margin-top: 30px; text-align: center; font-size: 11px; color: #7a6555; border-top: 1px solid #ede5da; padding-top: 10px; }
            </style>
          </head>
          <body>
            <div class="header">
              <div>
                <div class="brand">Rab A <span>Golden Heritage</span></div>
                <div class="subtitle">Custom Board Cutting &amp; Edge Banding Workshop Schedule</div>
              </div>
              <div style="font-size: 12px; text-align: right; color: #5a4535;">
                <div>Date: ${new Date().toLocaleDateString()}</div>
                <div>Ilaro, Ogun State, Nigeria</div>
              </div>
            </div>

            <div class="meta-grid">
              <div><strong>Board:</strong> ${board} (${thickness})</div>
              <div><strong>Standard Sheet:</strong> 1220mm × 2440mm (4ft × 8ft)</div>
              <div><strong>Edge Banding:</strong> ${edgeTape}</div>
              <div><strong>Client / Workshop:</strong> ${customer || 'Standard Workshop Order'}</div>
            </div>

            <table>
              <thead>
                <tr>
                  <th style="width: 40px;">#</th>
                  <th>Part Description / Label</th>
                  <th style="width: 110px;">Length (mm)</th>
                  <th style="width: 110px;">Width (mm)</th>
                  <th style="width: 60px;">Qty</th>
                  <th>Edge Banding Specification</th>
                </tr>
              </thead>
              <tbody>
                ${cutPieces.map((p, i) => `
                  <tr>
                    <td>${i + 1}</td>
                    <td><strong>${p.label || 'Piece ' + (i + 1)}</strong></td>
                    <td style="text-align: right;">${p.length} mm</td>
                    <td style="text-align: right;">${p.width} mm</td>
                    <td style="text-align: center;"><strong>${p.qty}</strong></td>
                    <td>${p.edges === 'all4' ? 'All 4 Edges' : (p.edges === '2long' ? '2 Long Edges' : (p.edges === '1long1short' ? '1 Long + 1 Short' : (p.edges === '1long' ? '1 Long Edge' : 'None (Raw)')))}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>

            <div class="summary-box">
              <strong>Optimization &amp; Material Estimates:</strong><br />
              Total Pieces: <strong>${metrics.totalPcs} pcs</strong> &bull; Total Area: <strong>${metrics.totalAreaSqM.toFixed(2)} m²</strong> &bull; Est. Sheets Needed: <strong>${metrics.estSheets} Sheet(s) (4×8ft)</strong> &bull; Total Edge Banding: <strong>${metrics.totalEdgeMeters.toFixed(1)} linear meters</strong>
            </div>

            ${notes ? `<div class="notes"><strong>Special Workshop Instructions:</strong><br />${notes}</div>` : ''}

            <div class="footer">
              Rab A Golden Heritage &bull; Everything for Furniture Makers, Under One Roof &bull; Tel / WhatsApp: +234 813 878 1961 (Main) &bull; +234 803 464 5669
            </div>

            <script>
              window.onload = function() { window.print(); };
            <\/script>
          </body>
          </html>
        `);
        printWindow.document.close();
      });
    }

    // Add Estimated Boards & Edge Tape to Cart
    if (btnAddBoardsCart) {
      btnAddBoardsCart.addEventListener('click', () => {
        if (cutPieces.length === 0) {
          alert('Cut list is empty.');
          return;
        }
        const metrics = recalcMetrics();
        const board = cutBoardSelect ? cutBoardSelect.value : 'MDF Board';
        const thickness = cutThicknessSelect ? cutThicknessSelect.value : '18mm';
        const edgeTape = cutEdgetapeSelect ? cutEdgetapeSelect.value : '1mm Matching PVC';

        if (metrics.estSheets > 0) {
          addItemToCart({
            id: 'cut-board-' + Date.now(),
            name: `${board} (${thickness}) [For Cutting Schedule]`,
            image: 'assets/rab-a-golden/mdf-boards.png'
          }, metrics.estSheets);
        }

        if (edgeTape !== 'None' && metrics.totalEdgeMeters > 0) {
          const rollsNeeded = Math.max(1, Math.ceil(metrics.totalEdgeMeters / 50));
          addItemToCart({
            id: 'cut-tape-' + Date.now(),
            name: `${edgeTape} (${rollsNeeded * 50}m Roll for Cut Schedule)`,
            image: 'assets/rab-a-golden/edge-banding.png'
          }, rollsNeeded);
        }

        openCart();
        showToast(`Added ${metrics.estSheets}x boards and matching edge tape to your enquiry list!`);
      });
    }

    // Initial render
    renderCutRows();

    // Check URL parameters for ?cut_board=...
    const urlParams = new URLSearchParams(window.location.search);
    const prefillBoard = urlParams.get('cut_board');
    if (prefillBoard) {
      window.selectBoardInCuttingTool(prefillBoard);
    }
  };

  // --------------------------------------------------------------------------
  // 8b. Featured Accessories In-Page Filter Controller (Zero Page Redirects)
  // --------------------------------------------------------------------------
  const initAccessoriesFilter = () => {
    const filterContainer = document.getElementById('acc-filter-pills');
    const accGrid = document.getElementById('accessories-grid');

    if (!filterContainer || !accGrid) return;

    const pillBtns = filterContainer.querySelectorAll('.acc-pill-btn');
    const cards = accGrid.querySelectorAll('.youceef-card');

    pillBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const selectedCat = btn.getAttribute('data-cat');

        pillBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        cards.forEach((card) => {
          const cardCat = card.getAttribute('data-category');
          if (selectedCat === 'all' || cardCat === selectedCat) {
            card.style.display = '';
            card.style.opacity = '0';
            card.style.transform = 'translateY(10px)';
            requestAnimationFrame(() => {
              card.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            });
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  };

  initAccessoriesFilter();

  // --------------------------------------------------------------------------
  // 9. Finished Works Auto-Floating & Interactive Slider Controller
  // --------------------------------------------------------------------------
  const initFinishedWorksSlider = () => {
    const fwContainer = document.getElementById('finished-works-marquee') || document.getElementById('finished-works-container');
    const fwPrevBtn = document.getElementById('fw-prev-btn');
    const fwNextBtn = document.getElementById('fw-next-btn');
    const floatingTrack = document.getElementById('floating-track');

    if (!floatingTrack) return;

    if (fwPrevBtn) {
      fwPrevBtn.addEventListener('click', () => {
        floatingTrack.style.animationPlayState = 'paused';
        if (fwContainer) fwContainer.scrollBy({ left: -420, behavior: 'smooth' });
      });
    }

    if (fwNextBtn) {
      fwNextBtn.addEventListener('click', () => {
        floatingTrack.style.animationPlayState = 'paused';
        if (fwContainer) fwContainer.scrollBy({ left: 420, behavior: 'smooth' });
      });
    }
  };

  initFinishedWorksSlider();
});
